---@diagnostic disable: duplicate-set-field
Property = {
    property_id = nil,
    propertyData = nil,
    shellData = nil,
    has_access = false,
    inShell = false,
    shellObj = nil,
    furnitureObjs = {},
    garageZone = nil,
    doorbellPool = {},

    CreateShell = function (self)
        local ped = PlayerPedId()
        local coords = self.propertyData.door_data
        local modelHash = self.shellData.hash
        RequestModel(modelHash)
        while not HasModelLoaded(modelHash) do Wait(0) end
        self.shellObj = CreateObject(modelHash, coords.x, coords.y, coords.z - 50.0, false, false, false)
        SetModelAsNoLongerNeeded(modelHash)
        FreezeEntityPosition(self.shellObj, true)
        local doorOffset = self.shellData.doorOffset
        local offset = GetOffsetFromEntityInWorldCoords(self.shellObj, doorOffset.x, doorOffset.y, doorOffset.z)
        self:RegisterDoorZone(offset)
        SetEntityCoordsNoOffset(ped, offset.x, offset.y, offset.z, false, false, true)
        SetEntityHeading(ped, self.shellData.doorOffset.heading)
    end,

    RegisterDoorZone = function(self, offset)
        if Config.Target == "qb" then
            exports['qb-target']:AddBoxZone("shellExit", vector3(offset.x, offset.y, offset.z),  1.0, self.shellData.doorOffset.width, {
                name="shellExit",
                heading= self.shellData.doorOffset.heading,
                debugPoly=Config.DebugPoly,
                minZ=offset.z-2.0,
                maxZ=offset.z+1.0,
            }, {
                options = {
                    {
                        label = 'Leave Property',
                        action = function(entity) -- This is the action it has to perform, this REPLACES the event and this is OPTIONAL
                            if IsPedAPlayer(entity) then return false end -- This will return false if the entity interacted with is a player and otherwise returns true
                            self:LeaveShell()
                        end,
                    },
                    {
                        label = "Check Door",
                        action = function(entity)
                            if IsPedAPlayer(entity) then return false end
                            self:OpenDoorbellMenu()
                        end
                    }
                }
            })
        elseif Config.Target == "ox" then
            exports.ox_target:addBoxZone({
                id = "shellExit",
                coords = vector3(offset.x, offset.y, offset.z),
                size = vector3(1.0, self.shellData.doorOffset.width, 3.0),
                rotation = self.shellData.doorOffset.heading,
                debug = Config.DebugZones,
                options = {
                    {
                        name = "leave",
                        label = "Leave Property",
                        onSelect = = function()
                            self:LeaveShell()
                        end,
                    },
                    {
                        name = "doorbell",
                        label = "Check Door",
                        onSelect = = function()
                            self:OpenDoorbellMenu()
                        end,
                    }
                }
            })
        end
    end,

    RegisterPropertyEntrance = function (self)
        local door_data = self.propertyData.door_data
        local targetname = string.gsub(self.propertyData.label, "%s+", "")..tostring(self.propertyData.property_id)
        local label = self.has_access and 'Enter Property' or 'Ring Doorbell'
        if Config.Target == "qb" then
            exports['qb-target']:AddBoxZone(targetname, vector3(door_data.x, door_data.y, door_data.z), door_data.length, door_data.width, {
                name=targetname,
                heading=door_data.h,
                debugPoly=true,
                minZ=door_data.z - 1.0,
                maxZ=door_data.z + 2.0,
            }, {
                options = {
                    {
                        label = label,
                        action = function(entity) -- This is the action it has to perform, this REPLACES the event and this is OPTIONAL
                            if IsPedAPlayer(entity) then return false end -- This will return false if the entity interacted with is a player and otherwise returns true
                            TriggerServerEvent('ps-housing:server:enterProperty', self.propertyData.property_id) -- Dont know how to pass args with target (sorry im dumb)
                        end,
                    }
                }
            })
        elseif Config.Target == "ox" then
            exports.ox_target:addBoxZone({
                id = targetname,
                coords = vector3(door_data.x, door_data.y, door_data.z),
                size = vector3(door_data.length, door_data.width, 3.0),
                rotation = door_data.h,
                debug = Config.DebugZones,
                options = {
                    {
                        name = "enter",
                        label = label,
                        onSelect = = function()
                            TriggerServerEvent('ps-housing:server:enterProperty', self.propertyData.property_id)
                        end,
                    }
                }
            })
        end
    end,

    -- QBCORE Did house garages the shittiest way possible so I did my own version of it. Might not be a very framework friendly decision but fuck qb
    RegisterGarageZone = function (self)
        if not self.propertyData.garage_data.x then return end
        local garageData = self.propertyData.garage_data
        local garageName = "property-"..self.property_id.."-garage"
        self.garageZone = BoxZone:Create(vector3(garageData.x, garageData.y, garageData.z), garageData.length, garageData.width, {
            name=garageName,
            debugPoly=Config.DebugPoly,
        })
        self.garageZone:onPlayerInOut(function(isPointInside, point)
            if isPointInside then
                exports['qb-core']:DrawText(self.propertyData.label .. " Garage", 'left')
                lib.showTextUI(self.propertyData.label .. " Garage")
                lib.addRadialItem({
                    id = garageName,
                    icon = 'warehouse',
                    label = 'Open Property Garage',
                    onSelect = function()
                        TriggerServerEvent('ps-housing:client:handleGarage', garageName)
                    end
                })
            else
                lib.hideTextUI()
                lib.removeRadialItem(garageName)
            end
        end)
    end,

    EnterShell = function(self)
        self.inShell = true
        self.shellData = Config.Shells[self.propertyData.shell]
        self:CreateShell()

        lib.addRadialItem({
            id = 'furniture_menu',
            icon = 'house',
            label = 'Furniture Menu',
            onSelect = function()
                TriggerEvent('ps-housing:client:furnitureMenu')
            end
        })
    end,

    LeaveShell = function(self)
        if not self.inShell then return end
        local ped = PlayerPedId()
        local coords = self.propertyData.door_data
        SetEntityCoordsNoOffset(ped, coords.x, coords.y, coords.z, false, false, true)

        if Config.Target == "qb" then
            exports['qb-target']:RemoveZone("shellExit")
        elseif Config.Target == "ox" then
            exports.ox_target:removeZone("shellExit")
        end

        lib.removeRadialItem('furniture_menu')

        self.garageZone:destroy()
        TriggerServerEvent("ps-housing:server:leaveShell", self.property_id)
        self.inShell = false
        self:UnloadFurnitures()
        DeleteObject(self.shellObj)
        self.shellObj = nil
        self.shellData = nil
        self.doorbellPool = {}
    end,

    OpenDoorbellMenu = function (self)
        if not self.doorbellPool then 
            QBCore.Functions.Notify('No one is at the door', 'error')
            return 
        end
        local id = "property-" .. self.property_id .. "-doorbell"
        local menu = {
            id = id,
            title = "People at the door",
            options = {}
        }
        for k, v in pairs(self.doorbellPool) do
            table.insert(menu.options,{
                title = GetPlayerName(k),
                serverEvent = "ps-housing:server:doorbellAnswer",
                args = {
                    targetSrc = k,
                    property_id = self.property_id,
                },
            })
        end
        lib.showContext(id)
    end,

    LoadFurnitures = function(self)
        for i = 1, #self.propertyData.furnitures do
            local v = self.propertyData.furnitures[i]
            local coords = GetOffsetFromEntityInWorldCoords(self.shellObj, v.position.x, v.position.y, v.position.z)
            local hash = v.object
            while not HasModelLoaded(hash) do Wait(0) end
            local object = CreateObject(hash, coords.x, coords.y, coords.z, false, true, false)
            SetModelAsNoLongerNeeded(hash)
            SetEntityRotation(object, v.rotation.x, v.rotation.y, v.rotation.z, 2, true)
            FreezeEntityPosition(object, true)
            self.furnitureObjs[#self.furnitureObjs + 1] = object
        end
    end,

    UnloadFurnitures = function(self)
        for i = 1, #self.furnitureObjs do
            DeleteObject(self.furnitureObjs[i])
        end
        self.furnitureObjs = {}
    end,

    DeleteProperty = function(self)
        local targetname = string.gsub(self.propertyData.label, "%s+", "")..tostring(self.property_id)
        if Config.Target == "qb" then
            exports['qb-target']:RemoveZone(targetname)
        elseif Config.Target == "ox" then
            exports.ox_target:removeZone(targetname)
        end
        if self.inShell then self:LeaveShell() end
    end,
}


function Property:new(propertyData)
    local obj = {}
    obj.property_id = propertyData.property_id
    obj.propertyData = propertyData
    local has_access = false
    local Player = QBCore.Functions.GetPlayerData()
    local citizenid = Player.citizenid
    for i = 1, #propertyData.has_access do
        if propertyData.has_access[i] == citizenid then
            has_access = true
            break
        end
    end
    obj.has_access = has_access
    setmetatable(obj, self)
    self.__index = self
    obj:RegisterPropertyEntrance()
    obj:RegisterGarageZone()
    obj:LoadFurnitures()
    return obj
end

RegisterNetEvent("ps-housing:client:enterProperty", function(property_id)
    local property = PropertiesTable[property_id]
    property:EnterShell()
end)

RegisterNetEvent("ps-housing:client:updateDoorbellPool", function(property_id, data)
    local property = PropertiesTable[property_id]
    property.doorbellPool = data
end)

-- seperate event so the player doesnt have to leave the shell to update the furniture
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
    property.propertyData = propertyData
    if property.inShell then
        property:LeaveShell()
    end
    property:DeleteProperty()
    property = nil
    PropertiesTable[property_id] = Property:new(propertyData)
end)

