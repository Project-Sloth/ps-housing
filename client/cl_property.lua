Property = {
	property_id = nil,
	propertyData = nil,

	shellData = nil,
	inProperty = false,
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

    -- Remove furnitures from property data for memory purposes
    propertyData.furnitures = {}
    self.propertyData = propertyData

    local Player = QBCore.Functions.GetPlayerData()
    local citizenid = Player.citizenid

    self.owner = propertyData.owner == citizenid
    self.has_access = lib.table.contains(self.propertyData, citizenid)

    if propertyData.apartment then
        local aptName = propertyData.apartment
        local apartment = ApartmentsTable[aptName]

        if not apartment and Config.Apartments[aptName] then
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
    SetEntityHeading(cache.ped, self.shellData.doorOffset.h)
end

function Property:RegisterDoorZone(offset)

    local function leave()
        self:LeaveShell()
    end

    local function checkDoor()
        self:OpenDoorbellMenu()
    end
    
    local coords = offset
    local size = vector3(1.0, self.shellData.doorOffset.width, 3.0)
    local heading = self.shellData.doorOffset.h

    self.exitTarget = Framework[Config.Target].AddDoorZoneInside(coords, size, heading, leave, checkDoor)
end

function Property:RegisterPropertyEntrance()
    local door = self.propertyData.door_data
    local size = vector3(door.length, door.width, 2.5)
    local heading = door.h
    --Can be anon functions but I like to keep them named its more readable
    local function enter()
        TriggerServerEvent("ps-housing:server:enterProperty", self.property_id)
    end

    local function raid()
        TriggerServerEvent("ps-housing:server:raidProperty", self.property_id)
    end

    local targetName = string.format("%s_%s", self.propertyData.label, self.property_id)

    self.entranceTarget = Framework[Config.Target].AddEntrance(door, size, heading, self.property_id, enter, raid, targetName)

    if self.owner or self.has_access then
        self:CreateBlip()
    end
end

function Property:UnregisterPropertyEntrance()
    if not self.entranceTarget then return end

    Framework[Config.Target].RemoveTargetZone(self.entranceTarget)
    self.entranceTarget = nil
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

function Property:UnregisterGarageZone()
    if not self.garageZone then return end

    TriggerEvent("qb-garages:client:removeHouseGarage", self.property_id)

    self.garageZone:destroy()
    self.garageZone = nil
end

function Property:EnterShell()
    DoScreenFadeOut(250)
    Wait(250)

    self.inProperty = true

    self.shellData = Config.Shells[self.propertyData.shell]
    self:CreateShell()

    self:LoadFurnitures()

    self:GiveMenus()

    Wait(250)
    DoScreenFadeIn(250)
end

function Property:LeaveShell()
    if not self.inProperty then return end

    DoScreenFadeOut(250)
    Wait(250)

    
    self.inProperty = false

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

    self:RemoveBlip()

    self.doorbellPool = {}


    Wait(250)
    DoScreenFadeIn(250)
end

function Property:GiveMenus()
    if not self.inProperty then return end

    local accessAndConfig = self.has_access and Config.AccessCanEditFurniture

    if self.owner or accessAndConfig then
        Framework[Config.Radial].AddRadialOption("furniture_menu", "Furniture Menu", "house", function()
            Modeler:OpenMenu(self.property_id)
        end)
    end

    if self.owner then
        Framework[Config.Radial].AddRadialOption("access_menu", "Manage Property Access", "key", function()
            self:ManageAccessMenu()
        end)
    end
end


function Property:RemoveMenus()
    if not self.inProperty then return end

    Framework[Config.Radial].RemoveRadialOption("furniture_menu")

    if self.owner then
        Framework[Config.Radial].RemoveRadialOption("access_menu")
    end
end


function Property:ManageAccessMenu()

    if not self.inProperty then return end

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
    if not self.inProperty then return end

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
    if not self.inProperty then return end

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

    for i = 1, #self.doorbellPool do
        local v = self.doorbellPool[i]
        menu.options[#menu.options + 1] = {
            title = v.name,
            onSelect = function()
                TriggerServerEvent(
                    "ps-housing:server:doorbellAnswer",
                    { targetSrc = v.src, property_id = self.property_id }
                )
            end,
        }
    end

    lib.registerContext(menu)
    lib.showContext(id)
end

function Property:LoadFurnitures()
    self.propertyData.furnitures = lib.callback.await('ps-housing:cb:getFurnitures', source, self.property_id) or {}

    for i, v in ipairs(self.propertyData.furnitures) do
        local coords = GetOffsetFromEntityInWorldCoords(self.shellObj, v.position.x, v.position.y, v.position.z)
        local hash = v.object

        lib.requestModel(hash)
        local entity = CreateObjectNoOffset(hash, coords.x, coords.y, coords.z, false, true, false)
        SetModelAsNoLongerNeeded(hash)
        SetEntityRotation(entity, v.rotation.x, v.rotation.y, v.rotation.z, 2, true)
        FreezeEntityPosition(entity, true)

        if v.type == "storage" then
            self.storageTarget = entity

            local stash = string.format("property_%s", self.property_id) -- if you changed this you will fuck things up
            local function openStash()
                local stashConfig = Config.Shells[self.propertyData.shell].stash
                TriggerServerEvent("inventory:server:OpenInventory", "stash", stash, stashConfig)
                TriggerEvent("inventory:client:SetCurrentStash", stash)
            end

            Framework[Config.Target].AddTargetEntity(entity, "Storage", openStash)
        elseif v.type == "clothing" then
            self.clothingTarget = entity

            local function openClothing()
                local heading = GetEntityHeading(cache.ped)
                SetEntityHeading(cache.ped, heading - 180.0)
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
            rotation = v.rotation,
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
    if not self.blip then return end
    RemoveBlip(self.blip)
    self.blip = nil
end

function Property:RemoveProperty()
    local targetName = string.format("%s_%s", self.propertyData.label, self.property_id)

    Framework[Config.Target].RemoveTargetZone(targetName)

    self:RemoveBlip()

    self:LeaveShell()

    --@@ comeback to this
    if self.propertyData.apartment then
        ApartmentsTable[self.propertyData.apartment]:RemoveProperty()
    end

    self = nil
end

-- function Property:UpdateFurnitures()
    -- self:UnloadFurnitures()
    -- self:LoadFurnitures()
-- end

function Property:UpdateLabel(newLabel)
    self.propertyData.label = newLabel

    --All below uses labels
    self:UnregisterPropertyEntrance()
    self:RegisterPropertyEntrance()

    self:UnregisterGarageZone()
    self:RegisterGarageZone()

    Property:CreateBlip()
end

function Property:UpdateDescription(newDescription)
    self.propertyData.description = newDescription
end

function Property:UpdatePrice(newPrice)
    self.propertyData.price = newPrice
end

function Property:UpdateForSale(forSale)
    self.propertyData.forSale = forSale
end

function Property:UpdateShell(newShell)
    self:LeaveShell()
    self.propertyData.shell = newShell

    if self.inProperty then
        self:EnterShell()
    end
end

function Property:UpdateOwner(newOwner)
    self.propertyData.owner = newOwner

    local Player = QBCore.Functions.GetPlayerData()
    local citizenid = Player.citizenid

    self.owner = newOwner == citizenid

    self:UnregisterGarageZone()
    self:RegisterGarageZone()

    self:CreateBlip()

    if not self.inProperty then return end

    self:RemoveMenus()
    self:GiveMenus()
end

function Property:UpdateImgs(newImgs)
    self.propertyData.imgs = newImgs
end

function Property:UpdateDoor(newDoor)
    self.propertyData.door_data = newDoor

    self:UnregisterPropertyEntrance()
    self:RegisterPropertyEntrance()
end

function Property:UpdateHas_access(newHas_access)
    self.propertyData.has_access = newHas_access

    if not self.inProperty then return end

    self:RemoveMenus()
    self:GiveMenus()
end

function Property:UpdateGarage(newGarage)
    self.propertyData.garage_data = newGarage

    self:UnregisterGarageZone()
    self:RegisterGarageZone()
end

function Property:UpdateApartment(newApartment)
    self:LeaveShell()

    local oldAptName = self.propertyData.apartment
    local oldApt = ApartmentsTable[oldAptName]
    if oldApt then
        oldApt:RemoveProperty(self.property_id)
    end

    self.propertyData.apartment = newApartment

    local newApt = ApartmentsTable[newApartment]

    if newApt then
        newApt:AddProperty(self.property_id)
    end

    TriggerEvent("ps-housing:client:updateApartment", oldAptName, newApartment)
end

function Property.Get(property_id)
    return PropertiesTable[tostring(property_id)]
end

RegisterNetEvent("ps-housing:client:enterProperty", function(property_id)
	local property = Property.Get(property_id)
	property:EnterShell()
end)

RegisterNetEvent("ps-housing:client:updateDoorbellPool", function(property_id, data)
	local property = Property.Get(property_id)
	property.doorbellPool = data
end)

RegisterNetEvent("ps-housing:client:updateFurniture", function(propertyData)
	local property_id = propertyData.property_id
	local property = Property.Get(property_id)
	property.propertyData.furnitures = propertyData.furnitures
	property:UnloadFurnitures()
	property:LoadFurnitures()
end)

RegisterNetEvent("ps-housing:client:updateProperty", function(type, property_id, data)
	local property = Property.Get(property_id)

    if not property then return end

    property[type](property, data)

    TriggerEvent("ps-housing:client:updatedProperty", property_id)
end)