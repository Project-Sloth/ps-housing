Property = {
	property_id = nil,
	propertyData = nil,

	shellData = nil,
	inShell = false,
	shellObj = nil,

	has_access = false,
	owner = false,

	storageTarget = nil,
	clothingTarget = nil,
	furnitureObjs = {},

	garageZone = nil,
	doorbellPool = {},

	entranceTarget = nil, -- needed for ox target
	exitTarget = nil, -- needed for ox target

	blip = nil,
}
Property.__index = Property

function Property:new(propertyData)
    local self = setmetatable({}, Property)
    self.property_id = tostring(propertyData.property_id)

    -- remove furnitures from property data for ram purposes just incase someone decides to create a fucking maze made out of sticks
    propertyData.furnitures = {} 
    self.propertyData = propertyData

    local Player =  QBCore.Functions.GetPlayerData()
    local citizenid = Player.citizenid

    self.owner = propertyData.owner == citizenid

    self.has_access = lib.table.contains(self.propertyData, citizenid)

    if propertyData.apartment then
        local aptName = propertyData.apartment
        local apartment = ApartmentsTable[aptName]

        if not apartment and Config.Apartments[apartment] then
                ApartmentsTable[aptName] = Apartment:new(Config.Apartments[aptName])
                apartment = ApartmentsTable[aptName]
        elseif not apartment then
            Debug(aptName .. " not found in Config")
			return
        end

        apartment:AddProperty(self.property_id)
    else
        self:RegisterPropertyEntrance()
		self:RegisterGarageZone()

		if self.owner or self.has_access then
			self:CreateBlip()
		end
    end

    return self
end

function Property:GetDoorCoords()
    local coords = nil

    local dataApartment = self.propertyData.apartment
    if dataApartment then
        local apartment = dataApartment
        coords = Config.Apartments[apartment].door
    else
        coords = self.propertyData.door_data
    end

    return coords
end

function Property:CreateShell()

    local coords = self:GetDoorCoords()

    local shellHash = self.shellData.hash
    lib.requestModel(shellHash)

    self.shellObj = CreateObjectNoOffset(shellHash, coords.x, coords.y, coords.z - 25.0, false, false, false)

    SetModelAsNoLongerNeeded(shellHash)
    FreezeEntityPosition(self.shellObj, true)

    local doorOffset = self.shellData.doorOffset
    local offset = GetOffsetFromEntityInWorldCoords(self.shellObj, doorOffset.x, doorOffset.y, doorOffset.z)
    self:RegisterDoorZone(offset)

    SetEntityCoordsNoOffset(cache.ped, offset.x, offset.y, offset.z, false, false, true)
    SetEntityHeading(cache.ped, self.shellData.doorOffset.heading)
end

function Property:RegisterDoorZone(offset)

    local function leave()
        if self.inShell then
            self:LeaveShell()
        end
    end

    local function checkDoor()
        if not self.inShell then
            self:OpenDoorbellMenu()
        end
    end
    
    local coords = offset
    local size = vector3(1.0, self.shellData.doorOffset.width, 3.0)
    local heading = self.shellData.doorOffset.heading

    self.exitTarget = Framework[Config.Target].AddDoorZoneInside(coords, size, heading, leave, checkDoor)
end

function Property:RegisterPropertyEntrance()
    local door = self.propertyData.door_data
    local size = vector3(door.length, door.width, 1.0)
    local heading = door.heading

    local function enter()
        TriggerServerEvent("ps-housing:server:enterProperty", self.property_id)
    end

    local function raid()
        TriggerServerEvent("ps-housing:server:raidProperty", self.property_id)
    end

    local targetName = string.format("%s_%s", self.propertyData.label, self.property_id)

    self.entranceTarget = Framework[Config.Target].AddEntrance(door, size, heading, self.property_id, enter, raid, targetName)
end

function Property:RegisterGarageZone()
    if not next(self.propertyData.garage_data) then return end

    if not (self.has_access or self.owner) or not self.owner then
        return
    end

    local garageData = self.propertyData.garage_data
    local garageName = string.format("property-%s-garage", self.property_id)

    local data = {
        takeVehicle = {
            x = garageData.x,
            y = garageData.y,
            z = garageData.z,
            w = garageData.h
        },
        type = "house",
        label = self.propertyData.label
    }

    TriggerEvent("qb-garages:client:addHouseGarage", self.property_id, data)

    self.garageZone = BoxZone:Create(vector3(garageData.x + 5.0, garageData.y + 5.0, garageData.z), garageData.length, garageData.width, {
        name = garageName,
        debugPoly = Config.DebugMode,
        minZ= garageData.z - 1.0,
        maxZ=garageData.z + 3.0
    })

    self.garageZone:onPlayerInOut(function(isPointInside, point)
        if isPointInside then
            TriggerEvent('qb-garages:client:setHouseGarage', self.property_id, true)
        end
    end)
end

function Property:EnterShell()
    DoScreenFadeOut(250)
    Wait(250)

    self.inShell = true

    self.shellData = Config.Shells[self.propertyData.shell]
    self:CreateShell()

    self:LoadFurnitures()

    local accessAndConfig = self.has_access and Config.AccessCanEditFurniture

    if self.owner or accessAndConfig then
        local function openFurnitureMenu()
            Modeler:OpenMenu(self.property_id)
        end

        local function openAccessMenu()
            self:ManageAccessMenu()
        end

        Framework[Config.Radial].AddRadialOption("furniture_menu", "Furniture Menu", "house", openFurnitureMenu)

        Framework[Config.Radial].AddRadialOption("access_menu", "Manage Property Access", "key", openAccessMenu)
    end

    Wait(250)
    DoScreenFadeIn(250)
end

function Property:LeaveShell()
    DoScreenFadeOut(250)
    Wait(250)
    if not self.inShell then
        return
    end
    
    self.inShell = false

    local coords = self:GetDoorCoords()
    SetEntityCoordsNoOffset(cache.ped, coords.x, coords.y, coords.z, false, false, true)

    TriggerServerEvent("ps-housing:server:leaveProperty", self.property_id)

    self:UnloadFurnitures()
    self.propertyData.furnitures = {}


    if self.shellObj then
        DeleteEntity(self.shellObj)
        self.shellObj = nil
    end

    if self.exitTarget then
        Framework[Config.Target].RemoveTargetZone(self.exitTarget)
        self.exitTarget = nil
    end

    if self.entranceTarget then
        Framework[Config.Target].RemoveTargetZone(self.entranceTarget)
        self.entranceTarget = nil
    end

    if self.garageZone then
        self.garageZone:destroy()
        self.garageZone = nil
    end

    if self.blip then
        RemoveBlip(self.blip)
        self.blip = nil
    end

    self.doorbellPool = {}

    Framework[Config.Radial].RemoveRadialOption("furniture_menu")
    Framework[Config.Radial].RemoveRadialOption("access_menu")

    self:UnloadFurnitures()

    Wait(250)
    DoScreenFadeIn(250)
end

function Property:ManageAccessMenu()

    if not self.owner then
        Framework[Config.Notify].Notify("Only the owner can do this.", "error")
        return
    end

    --Fuck qb-menu
    local id = "property-" .. self.property_id .. "-access"
    local menu = {
        id = id,
        title = "Manage Access",
        options = {},
    }

    menu.options[#menu.options + 1] = {
        title = "Give Access",
        onSelect = function()
            self:GiveAccessMenu()
        end,
    }

    menu.options[#menu.options + 1] = {
        title = "Revoke Access",
        onSelect = function()
            self:RevokeAccessMenu()
        end,
    }

    lib.registerContext(menu)
    lib.showContext(id)
end

function Property:GiveAccessMenu()
    if not self.owner then
        return
    end

    local id = "property-" .. self.property_id .. "-access-give"
    local menu = {
        id = id,
        title = "Give Access",
        options = {},
    }

    local players = lib.callback.await("ps-housing:cb:getPlayersInProperty", source, self.property_id) or {}

    if #players > 0 then
        for i = 1, #players do
            local v = players[i]
            menu.options[#menu.options + 1] = {
                title = v.name,
                description = "Give Access",
                onSelect = function()
                    TriggerServerEvent("ps-housing:server:addAccess", self.property_id, v.src)
                end,
            }
        end

        lib.registerContext(menu)
        lib.showContext(id)
    else
        Framework[Config.Notify].Notify("No one is in the property", "error")
    end
end

function Property:RevokeAccessMenu()
    if not self.owner then
        return
    end

    local id = "property-" .. self.property_id .. "-access-already"
    local alreadyAccessMenu = {
        id = id,
        title = "Revoke Access",
        options = {},
    }

    local playersWithAccess = lib.callback.await("ps-housing:cb:getPlayersWithAccess", source, self.property_id) or {}

    -- only stores names and citizenids in a table so if their offline you can still remove them
    if #playersWithAccess > 0 then
        for i = 1,  #playersWithAccess do
            local v = playersWithAccess[i]
            alreadyAccessMenu.options[#alreadyAccessMenu.options + 1] = {
                title = v.name,
                description = "Remove Access",
                onSelect = function()
                    TriggerServerEvent("ps-housing:server:removeAccess", self.property_id, v.citizenid)
                end,
            }
        end

        lib.registerContext(alreadyAccessMenu)
        lib.showContext(id)
    else
        Framework[Config.Notify].Notify("No one has access to this property", "error")
    end 
end

function Property:OpenDoorbellMenu()
    if not next(self.doorbellPool) then
        Framework[Config.Notify].Notify("No one is at the door", "error")
        return
    end

    local id = string.format("property-%s-doorbell", self.property_id)
    local menu = {
        id = id,
        title = "People at the door",
        options = {},
    }

    for _, v in pairs(self.doorbellPool) do
        table.insert(menu.options, {
            title = v.name,
            onSelect = function()
                TriggerServerEvent(
                    "ps-housing:server:doorbellAnswer",
                    { targetSrc = v.src, property_id = self.property_id }
                )
            end,
        })
    end

    lib.registerContext(menu)
    lib.showContext(id)
end

function Property:LoadFurnitures()
    self.propertyData.furnitures = lib.callback.await('ps-housing:cb:getFurnitures', source, self.property_id) or {}

    for i = 1, #self.propertyData.furnitures do
        local v = self.propertyData.furnitures[i]
        local coords = GetOffsetFromEntityInWorldCoords(self.shellObj, v.position.x, v.position.y, v.position.z)
        local hash = v.object

        lib.requestModel(hash)
        local entity = CreateObjectNoOffset(hash, coords.x, coords.y, coords.z, false, true, false)
        SetModelAsNoLongerNeeded(hash)
        SetEntityRotation(entity, v.rotation.x, v.rotation.y, v.rotation.z, 2, true)
        FreezeEntityPosition(entity, true)

        -- For the prerequisites
        if v.type == "storage" then
            self.storageTarget = entity
            -- WARNING: If you change this naming of the property id's, you will mess up all previous property stashes
            local stash = string.format("property_%s", self.property_id)
            local function openStash()
                local stashConfig = Config.Shells[self.propertyData.shell].stash
                TriggerServerEvent("inventory:server:OpenInventory", "stash", stash, stashConfig)
                TriggerEvent("inventory:client:SetCurrentStash", stash)
            end

            Framework[Config.Target].AddTargetEntity(entity, "Storage", openStash)
        elseif v.type == "clothing" then
            self.clothingTarget = entity

            local function openClothing()
                -- set entity heading opposite of current player heading
                local heading = GetEntityHeading(cache.ped)
                SetEntityHeading(cache.ped, heading - 180.0)
                -- ^^ copilot goated

                TriggerEvent("qb-clothing:client:openOutfitMenu")
            end

            Framework[Config.Target].AddTargetEntity(entity, "Clothing", openClothing)
        end

        self.furnitureObjs[#self.furnitureObjs + 1] = {
            entity = entity,
            id = v.id,
            label = v.label,
            object = v.object,
            position = {
                x = coords.x,
                y = coords.y,
                z = coords.z,
            },
            rotation = {
                x = v.rotation.x,
                y = v.rotation.y,
                z = v.rotation.z,
            },
            type = v.type,
        }

    end
end

function Property:UnloadFurnitures()
    for i = 1, #self.furnitureObjs do
        local v = self.furnitureObjs[i]
        local entity = v.entity

        if self.clothingTarget == entity or self.storageTarget == entity then
            Framework[Config.Target].RemoveTargetEntity(entity)

            if self.clothingTarget == entity then
                self.clothingTarget = nil
            elseif self.storageTarget == entity then
                self.storageTarget = nil
            end
        end

        DeleteObject(entity)
    end

    self.furnitureObjs = {}
end

function Property:CreateBlip()
    print("Creating blip", json.encode(self.propertyData, {indent = true}))
    local door_data = self.propertyData.door_data
    local blip = AddBlipForCoord(door_data.x, door_data.y, door_data.z)
    SetBlipSprite(blip, 40)
    SetBlipScale(blip, 0.8)
    SetBlipColour(blip, 2)
    SetBlipAsShortRange(blip, true)
    BeginTextCommandSetBlipName("STRING")
    AddTextComponentString(self.propertyData.label .. " - " .. self.property_id)
    EndTextCommandSetBlipName(blip)
    self.blip = blip
end

function Property:RemoveBlip()
    RemoveBlip(self.blip)
    self.blip = nil
end

function Property:RemoveProperty()
    local targetName = string.format("%s_%s", self.propertyData.label, self.property_id)

    Framework[Config.Target].RemoveTargetZone(targetName)

    if self.blip then
        self:RemoveBlip()
    end

    if self.inShell then
        self:LeaveShell()
        Wait(1000)
    end

    if self.propertyData.apartment then
        ApartmentsTable[self.propertyData.apartment]:RemoveProperty()
    end

    self = nil
end

RegisterNetEvent("ps-housing:client:enterProperty", function(property_id)
	local property = PropertiesTable[property_id]
	property:EnterShell()
end)

RegisterNetEvent("ps-housing:client:updateDoorbellPool", function(property_id, data)
	local property = PropertiesTable[property_id]
	property.doorbellPool = data
end)

RegisterNetEvent("ps-housing:client:updateFurniture", function(propertyData)
	local property_id = propertyData.property_id
	local property = PropertiesTable[property_id]
	property.propertyData.furnitures = propertyData.furnitures
	property:UnloadFurnitures()
	property:LoadFurnitures()
end)

RegisterNetEvent("ps-housing:client:updateProperty", function(propertyData)
	local property_id = propertyData.property_id
	local property = PropertiesTable[property_id]
	propertyData.furnitures = {} -- will be fetched on enter, just to save some ram
	property.propertyData = propertyData

	if property.inShell then
		property:LeaveShell()
	end

	if propertyData.apartment ~= nil then
		local apartment = ApartmentsTable[propertyData.apartment]
		apartment:RemoveProperty(property_id)
	end

	property:RemoveProperty()
	property = nil
	PropertiesTable[property_id] = Property:new(propertyData)
end)