QBCore = exports['qb-core']:GetCoreObject()

PropertiesTable = {}
ApartmentsTable = {}

local function getProperties()
	local properties = {}

	for k, v in pairs(PropertiesTable) do
		properties[#properties+1] = v.propertyData
	end

	return properties
end

local function getApartments()
    local apartments = {}

    for k, v in pairs(ApartmentsTable) do
        apartments[#apartments+1] = v
    end

    return apartments
end

local function getData()
    local data = {
        properties = getProperties(),
        apartments = getApartments()
    }

    return data
end
exports('GetData', getData)

-- Not used but can be used for other resources
exports('GetProperty', function(property_id)
	return PropertiesTable[property_id]
end)

exports('GetShells', function()
	return Config.Shells
end)



local function createProperty(property)
	PropertiesTable[property.property_id] = Property:new(property)
    
	if GetResourceState('bl-realtor') == 'started' then
		local properties = getProperties()
		TriggerEvent("bl-realtor:client:updateProperties", properties)

        if property.apartment then
            local apartments = getApartments()
            TriggerEvent("bl-realtor:client:updateApartments", apartments)
        end
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

function InitialiseProperties()
    Debug("Initialising properties")
    for k, v in pairs(Config.Apartments) do
        ApartmentsTable[k] = Apartment:new(v)
    end

    local properties = lib.callback.await('ps-housing:server:requestProperties')

    for k, v in pairs(properties) do
        createProperty(v)
    end
    Debug("Initialised properties")
end
AddEventHandler("QBCore:Client:OnPlayerLoaded", InitialiseProperties)
RegisterNetEvent('ps-housing:client:initialiseProperties', InitialiseProperties)

AddEventHandler("onResourceStart", function(resourceName) -- Used for when the resource is restarted while in game
	if (GetCurrentResourceName() == resourceName) then
        InitialiseProperties()
	end
end)

RegisterNetEvent('ps-housing:client:setupSpawnUI', function(cData)
    DoScreenFadeOut(1000)
    local result = lib.callback.await('ps-housing:cb:GetOwnedApartment', source, cData.citizenid)
    if result then
        TriggerEvent('qb-spawn:client:setupSpawns', cData, false, nil)
        TriggerEvent('qb-spawn:client:openUI', true)
        -- TriggerEvent("apartments:client:SetHomeBlip", result.type)
    else
        if Config.StartingApartment then
            TriggerEvent('qb-spawn:client:setupSpawns', cData, true, Config.Apartments)
            TriggerEvent('qb-spawn:client:openUI', true)
        else
            TriggerEvent('qb-spawn:client:setupSpawns', cData, false, nil)
            TriggerEvent('qb-spawn:client:openUI', true)
        end
    end
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
        local ped = cache.ped
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
    Debug("The marker showing is the door_data boxzone that will be created. Make sure the door_data is inside for the target to work. \n"
    .. "This box has a length of 2.0, width of 1.0 \n")
    local length = 2.0
    local width = 1.0
    local zoff = 2.0
    local height = 3.0
    
    while findingOffset do
        local ped = cache.ped
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


AddEventHandler("onResourceStop", function(resourceName)
	if (GetCurrentResourceName() == resourceName) then
		if Modeler.IsMenuActive then
			Modeler:CloseMenu()
		end

		for k, v in pairs(PropertiesTable) do
			v:DeleteProperty()
		end

        for k, v in pairs(ApartmentsTable) do
            v:DeleteApartment()
        end
	end
end)