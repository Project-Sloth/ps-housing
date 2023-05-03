QBCore = exports['qb-core']:GetCoreObject()
PropertiesTable = {}


local function GetProperties()
	local properties = {}
	for k, v in pairs(PropertiesTable) do
		properties[#properties+1] = v.propertyData
	end
	return properties
end
exports('GetProperties',  GetProperties)

exports('GetProperty', function(property_id)
	return PropertiesTable[property_id]
end)

exports('GetShells', function()
	return Config.Shells
end)

AddEventHandler("onResourceStop", function(resourceName)
	if (GetCurrentResourceName() == resourceName) then
		if Modeler.IsMenuActive then
			Modeler:CloseMenu()
		end
		for k, v in pairs(PropertiesTable) do
			v:DeleteProperty()
		end
	end
end)

local function createProperty(property)
	PropertiesTable[property.property_id] = Property:new(property)
	if GetResourceState('bl-realtor') == 'started' then
		local properties = GetProperties()
		TriggerEvent("bl-realtor:client:updateProperties", properties)
	end
end
RegisterNetEvent('ps-housing:client:addProperty', createProperty)

RegisterNetEvent('ps-housing:client:deleteProperty', function (property_id)
	local property = PropertiesTable[property_id]
	if property then
		property:DeleteProperty()
	end
	PropertiesTable[property_id] = nil
end)


-- AddEventHandler("QBCore:Client:OnPlayerLoaded", function()
--     local properties = lib.callback.await('ps-housing:server:requestProperties')
--     for k, v in pairs(properties) do
--         createProperty(v)
--     end
-- end)

AddEventHandler("onResourceStart", function(resourceName)
	if (GetCurrentResourceName() == resourceName) then
        local properties = lib.callback.await('ps-housing:server:requestProperties')
        for k, v in pairs(properties) do
            createProperty(v)
        end
	end
end)

-- Garage Stuff because the way qb did it with houses is the most retarded shit ever.
AddEventHandler("ps-housing:client:handleGarage", function (data)
    local propertyVehicles = lib.callback.await("ps-housing:cb:getVehicles", )
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
