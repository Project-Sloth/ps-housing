Property = {
    property_id = nil,
    propertyData = nil,

    shell = nil,
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
    exitTarget = nil,     -- needed for ox target

    blip = nil,
}
Property.__index = Property

function Property:new(propertyData)
    local self = setmetatable({}, Property)
    self.property_id = tostring(propertyData.property_id)

    -- Remove furnitures from property data for memory purposes
    propertyData.furnitures = {}
    self.propertyData = propertyData

    local citizenid = PlayerData.citizenid

    self.owner = propertyData.owner == citizenid
    self.has_access = lib.table.contains(self.propertyData.has_access, citizenid)

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

    coords = vec3(coords.x, coords.y, coords.z - 25.0)
    self.shell = Shell:CreatePropertyShell(self.propertyData.shell, coords)

    self.shellObj = self.shell.entity

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

    local function showcase()
        TriggerServerEvent("ps-housing:server:showcaseProperty", self.property_id)
    end

    local function showData()
        local data = lib.callback.await("ps-housing:cb:getPropertyInfo", source, self.property_id)
        if not data then return end

        local content = "**Owner:** " .. data.owner .. "  \n" .. "**Description:** " .. data.description .. "  \n" .. "**Street:** " .. data.street .. "  \n" .. "**Region:** " .. data.region .. "  \n" .. "**Shell:** " .. data.shell .. "  \n" .. "**For Sale:** " .. (data.for_sale and "Yes" or "No")

        if data.for_sale then
            content = content .. "  \n" .. "**Price:** " .. data.price
        end

        lib.alertDialog({
            header = data.street .. " " .. data.property_id,
            content = content,
            centered = true,
        })
    end

    local targetName = string.format("%s_%s", self.propertyData.street, self.property_id)

    self.entranceTarget = Framework[Config.Target].AddEntrance(door, size, heading, self.property_id, enter, raid, showcase, showData, targetName)

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
        label = self.propertyData.street .. self.property_id .. " Garage",
    }

    TriggerEvent("qb-garages:client:addHouseGarage", self.property_id, data)

    self.garageZone = lib.zones.box({
        coords = vec3(garageData.x, garageData.y, garageData.z),
        size = vector3(garageData.length + 5.0, garageData.width + 5.0, 3.5),
        rotation = garageData.h,
        debug = Config.DebugMode,
        onEnter = function()
            TriggerEvent('qb-garages:client:setHouseGarage', self.property_id, true)
        end,
    })
end

function Property:UnregisterGarageZone()
    if not self.garageZone then return end

    TriggerEvent("qb-garages:client:removeHouseGarage", self.property_id)

    self.garageZone:remove()
    self.garageZone = nil
end

function Property:EnterShell()
    DoScreenFadeOut(250)
    TriggerServerEvent("InteractSound_SV:PlayOnSource", "houses_door_open", 0.25)
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
    TriggerServerEvent("InteractSound_SV:PlayOnSource", "houses_door_open", 0.25)
    Wait(250)

    local coords = self:GetDoorCoords()
    SetEntityCoordsNoOffset(cache.ped, coords.x, coords.y, coords.z, false, false, true)

    TriggerServerEvent("ps-housing:server:leaveProperty", self.property_id)

    self:UnloadFurnitures()
    self.propertyData.furnitures = {}

    self.shell:DespawnShell()
    self.shell = nil
    if self.exitTarget then
        Framework[Config.Target].RemoveTargetZone(self.exitTarget)
        self.exitTarget = nil
    end

    self:RemoveMenus()

    self.doorbellPool = {}

    self.inProperty = false
    Wait(250)
    DoScreenFadeIn(250)
end

function Property:GiveMenus()
    if not self.inProperty then return end

    local accessAndConfig = self.has_access and Config.AccessCanEditFurniture

    if self.owner or accessAndConfig then
        Framework[Config.Radial].AddRadialOption(
            "furniture_menu",
            "Furniture Menu",
            "house",
            function()
                Modeler:OpenMenu(self.property_id)
            end,
            "ps-housing:client:openFurnitureMenu",
            { propertyId = self.property_id }
        )
    end

    if self.owner then
        Framework[Config.Radial].AddRadialOption(
            "access_menu",
            "Manage Property",
            "key",
            function()
                self:ManageAccessMenu()
            end,
            "ps-housing:client:openManagePropertyAccessMenu",
            { propertyId = self.property_id }
        )
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
        for i = 1, #playersWithAccess do
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

    for k, v in pairs(self.doorbellPool) do
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

function Property:LoadFurniture(furniture)
    local coords = GetOffsetFromEntityInWorldCoords(self.shellObj, furniture.position.x, furniture.position.y, furniture.position.z)
    local hash = furniture.object

    lib.requestModel(hash)
    local entity = CreateObjectNoOffset(hash, coords.x, coords.y, coords.z, false, true, false)
    SetModelAsNoLongerNeeded(hash)
    SetEntityRotation(entity, furniture.rotation.x, furniture.rotation.y, furniture.rotation.z, 2, true)

    if furniture.type == 'door' and Config.DynamicDoors then
        Debug("Object: "..furniture.label.." wont be frozen")
    else
        FreezeEntityPosition(entity, true)
    end

    if furniture.type and Config.FurnitureTypes[furniture.type] then
        Config.FurnitureTypes[furniture.type](entity, self.property_id, self.propertyData.shell)
    end

    self.furnitureObjs[#self.furnitureObjs + 1] = {
        entity = entity,
        id = furniture.id,
        label = furniture.label,
        object = furniture.object,
        position = {
            x = coords.x,
            y = coords.y,
            z = coords.z,
        },
        rotation = furniture.rotation,
        type = furniture.type,
    }
end

function Property:LoadFurnitures()
    self.propertyData.furnitures = lib.callback.await('ps-housing:cb:getFurnitures', source, self.property_id) or {}
    
    for i = 1, #self.propertyData.furnitures do
        local furniture = self.propertyData.furnitures[i]
        self:LoadFurniture(furniture)
    end
end

function Property:UnloadFurniture(furniture, index)
    local entity = furniture?.entity
    if not entity then 
        for i = 1, #self.furnitureObjs do
            if self.furnitureObjs[i]?.id and furniture?.id and self.furnitureObjs[i].id == furniture.id then
                entity = self.furnitureObjs[i]?.entity
                break
            end
        end
    end

    if self.clothingTarget == entity or self.storageTarget == entity then
        Framework[Config.Target].RemoveTargetEntity(entity)

        if self.clothingTarget == entity then
            self.clothingTarget = nil
        elseif self.storageTarget == entity then
            self.storageTarget = nil
        end
    end

    if index and self.furnitureObjs?[index] then
        table.remove(self.furnitureObjs, index)
    else 
        for i = 1, #self.furnitureObjs do
            if self.furnitureObjs[i]?.id and furniture?.id and self.furnitureObjs[i].id == furniture.id then
                table.remove(self.furnitureObjs, i)
                break
            end
        end
    end

    DeleteObject(entity)
end

function Property:UnloadFurnitures()
    for i = 1, #self.furnitureObjs do
        local furniture = self.furnitureObjs[i]
        self:UnloadFurniture(furniture, i)
    end
    self.furnitureObjs = {}
end

function Property:CreateBlip()
    local door_data = self.propertyData.door_data
    local blip = AddBlipForCoord(door_data.x, door_data.y, door_data.z)
    if self.propertyData.garage_data.x ~= nil then
        SetBlipSprite(blip, 492)
    else
        SetBlipSprite(blip, 40)
    end
    SetBlipScale(blip, 0.8)
    SetBlipColour(blip, 2)
    SetBlipAsShortRange(blip, true)
    BeginTextCommandSetBlipName("STRING")
    AddTextComponentString(self.propertyData.street .. " " .. self.property_id)
    EndTextCommandSetBlipName(blip)
    self.blip = blip
end

function Property:RemoveBlip()
    if not self.blip then return end
    RemoveBlip(self.blip)
    self.blip = nil
end

function Property:RemoveProperty()
    if Config.Target == "ox" then
        Framework[Config.Target].RemoveTargetZone(self.entranceTarget)
    else
        local targetName = string.format("%s_%s", self.propertyData.street, self.property_id)
        Framework[Config.Target].RemoveTargetZone(targetName)
    end

    self:RemoveBlip()

    self:LeaveShell()

    --@@ comeback to this
    -- Think it works now
    if self.propertyData.apartment then
        ApartmentsTable[self.propertyData.apartment]:RemoveProperty()
    end

    self = nil
end

local function findFurnitureDifference(new, old)
    local added = {}
    local removed = {}
    local edited = {}

    for i = 1, #new do
        local found = false
        for j = 1, #old do
            if new[i].id == old[j].id then
                found = true
                break
            end
        end
        if not found then
            added[#added + 1] = new[i]
        end
    end

    for i = 1, #old do
        local found = false
        for j = 1, #new do
            if old[i].id == new[j].id then
                found = true
                break
            end
        end
        if not found then
            removed[#removed + 1] = old[i]
        end
    end

    for i = 1, #new do
        if new[i].movedObject then
            edited[#edited + 1] = new[i]
        end
    end

    return added, removed, edited
end

-- I think this whole furniture sync is a bit shit, but I cbf thinking 
function Property:UpdateFurnitures(newFurnitures)
    if not self.inProperty then return end

    local oldFurnitures = self.propertyData.furnitures
    local added, removed, edited = findFurnitureDifference(newFurnitures, oldFurnitures)

    for i = 1, #added do
        local furniture = added[i]
        self:LoadFurniture(furniture)
    end

    for i = 1, #removed do
        local furniture = removed[i]
        self:UnloadFurniture(furniture)
    end
    
    for i = 1, #edited do
        local furniture = edited[i]
        self:UnloadFurniture(furniture)
        self:LoadFurniture(furniture)
    end

    local furnitures = {}

    for i = 1, #newFurnitures do
        furnitures[i] = {
            id = newFurnitures[i].id,
            label = newFurnitures[i].label,
            object = newFurnitures[i].object,
            position = newFurnitures[i].position,
            rotation = newFurnitures[i].rotation,
            type = newFurnitures[i].type
        }
    end

    self.propertyData.furnitures = furnitures

    Modeler:UpdateFurnitures()
end

function Property:UpdateDescription(newDescription)
    self.propertyData.description = newDescription
end

function Property:UpdatePrice(newPrice)
    self.propertyData.price = newPrice
end

function Property:UpdateForSale(forSale)
    self.propertyData.for_sale = forSale
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

    local citizenid = PlayerData.citizenid

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

function Property:UpdateDoor(newDoor, newStreet, newRegion)
    self.propertyData.door_data = newDoor
    self.propertyData.street = newStreet
    self.propertyData.region = newRegion

    self:UnregisterPropertyEntrance()
    self:RegisterPropertyEntrance()
end

function Property:UpdateHas_access(newHas_access)
    local citizenid = PlayerData.citizenid
    self.propertyData.has_access = newHas_access
    self.has_access = lib.table.contains(newHas_access, citizenid)

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

RegisterNetEvent("ps-housing:client:updateFurniture", function(property_id, furnitures)
    local property = Property.Get(property_id)
    if not property then return end
    property:UpdateFurnitures(furnitures)
end)

RegisterNetEvent("ps-housing:client:updateProperty", function(type, property_id, data)
    local property = Property.Get(property_id)

    if not property then return end

    property[type](property, data)

    TriggerEvent("ps-housing:client:updatedProperty", property_id)
end)

RegisterNetEvent("ps-housing:client:openFurnitureMenu", function(data)
    Modeler:OpenMenu(data.options.propertyId)
end)

RegisterNetEvent("ps-housing:client:openManagePropertyAccessMenu", function(data)
    local property = Property.Get(data.options.propertyId)
    if not property then return end

    property:ManageAccessMenu()
end)
