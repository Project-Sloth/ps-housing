---@diagnostic disable: duplicate-set-field
Property = {
    inShell = false,
    has_access = false,
    isOwner = false,
    shellObj = nil,
    shellData = nil,
    property_id = nil,
    propertyData = nil,
    furnitureObjs = {},

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
        exports['qb-target']:AddBoxZone("shellExit", vector3(offset.x, offset.y, offset.z),  1.0, self.shellData.doorOffset.width, {
            name="shellExit",
            heading= self.shellData.doorOffset.heading,
            debugPoly=true,
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
                }
            }
        })
    end,

    EnterShell = function(self)
        self.inShell = true
        self.shellData = Config.Shells[self.propertyData.shell]
        self:CreateShell()
        exports['qb-radialmenu']:AddOption({
            id = "furnituremenu",
            title = "Furniture Menu",
            icon = "house",
            type = "client",
            event = "ps-housing:client:furnitureMenu",
            shouldClose = true,
        }, "furnituremenu")
    end,

    LeaveShell = function(self)
        if not self.inShell then return end
        local ped = PlayerPedId()
        local coords = self.propertyData.door_data
        SetEntityCoordsNoOffset(ped, coords.x, coords.y, coords.z, false, false, true)
        exports['qb-target']:RemoveZone("shellExit")
        exports['qb-radialmenu']:RemoveOption("furnituremenu")
        TriggerServerEvent("ps-housing:server:leaveShell", self.property_id)
        self.inShell = false
        self:UnloadFurnitures()
        DeleteObject(self.shellObj)
        self.shellObj = nil
        self.shellData = nil
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
        exports['qb-target']:RemoveZone(targetname)
        if self.inShell then self:LeaveShell() end
    end,
}


function Property:new(propertyData)
    local obj = {}
    obj.property_id = propertyData.property_id
    obj.propertyData = propertyData
    local isOwner = false
    local has_access = false
    local Player = QBCore.Functions.GetPlayerData()
    local citizenid = Player.citizenid
    if propertyData.owner == citizenid then
        isOwner = true
    end
    for i = 1, #propertyData.has_access do
        if propertyData.has_access[i] == citizenid then
            has_access = true
            break
        end
    end
    obj.isOwner = isOwner
    obj.has_access = has_access
	local door_data = propertyData.door_data
    local targetname = string.gsub(propertyData.label, "%s+", "")..tostring(propertyData.property_id)
	exports['qb-target']:AddBoxZone(targetname, vector3(door_data.x, door_data.y, door_data.z), door_data.length, door_data.width, {
		name=targetname,
		heading=door_data.h,
		debugPoly=true,
		minZ=door_data.z - 1.0,
		maxZ=door_data.z + 2.0,
	}, {
		options = {
			{
				label = 'Enter Property',
				action = function(entity) -- This is the action it has to perform, this REPLACES the event and this is OPTIONAL
					if IsPedAPlayer(entity) then return false end -- This will return false if the entity interacted with is a player and otherwise returns true
					TriggerServerEvent('ps-housing:server:enterProperty', propertyData.property_id)
				end,
			}
		}
	})
    setmetatable(obj, self)
    self.__index = self
    return obj
end

RegisterNetEvent("ps-housing:client:enterProperty", function(property_id)
    local property = PropertiesTable[property_id]
    property:EnterShell()
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


local findingOffset = false
local function offsetThread()
    -- find the property that the player is in
    local propertyObj = nil
    for k, v in pairs(PropertiesTable) do
        if v.inShell then
            propertyObj = v.shellObj
            break
        end
    end
    local shellCoords = GetEntityCoords(propertyObj)
    while findingOffset do
        local ped = PlayerPedId()
        local coords = GetEntityCoords(ped)
        local x = math.floor((coords.x - shellCoords.x) * 100) / 100
        local y = math.floor((coords.y - shellCoords.y) * 100) / 100
        local z = math.floor((coords.z - shellCoords.z) * 100) / 100
        local heading = math.floor(GetEntityHeading(ped) * 100) / 100
        BeginTextCommandDisplayText('STRING')
        AddTextComponentSubstringPlayerName('x: ' .. x .. ' y: ' .. y .. ' z: ' .. z .. ' heading: ' .. heading)
        EndTextCommandDisplayText(0, 0)
        ClearDrawOrigin()
        Wait(0)
    end
end

local function markerThread()
    print("The marker showing is the door_data boxzone that will be created. Make sure the door_data is inside for the target to work. \n"
    .. "This box has a length of 2.0, width of 1.0 \n")
    local length = 2.0
    local width = 1.0
    local zoff = 2.0
    local height = 3.0
    while findingOffset do
        local ped = PlayerPedId()
        local coords = GetEntityCoords(ped)
        local heading = GetEntityHeading(ped)
        DrawMarker(43, coords.x, coords.y, coords.z + zoff, 0.0, 0.0, 0.0, 0.0, 180.0, -heading, length, width, height, 255, 0, 0, 50, false, false, 2, nil, nil, false)
        Wait(0)
    end
end

RegisterCommand('findoffset', function()
    findingOffset = not findingOffset
    if not findingOffset then return end
    CreateThread(offsetThread)
    CreateThread(markerThread)
end)

RegisterCommand('leave', function()
    Property:LeaveShell()
end)