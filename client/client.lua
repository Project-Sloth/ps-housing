QBCore = exports['qb-core']:GetCoreObject()


-- Not used but can be used for other resources
exports('GetProperty', function(property_id)
	return PropertiesTable[property_id]
end)

exports('GetShells', function()
	return Config.Shells
end)



local function createProperty(property)
	PropertiesTable[property.property_id] = Property:new(property)
end
RegisterNetEvent('ps-housing:client:addProperty', createProperty)

RegisterNetEvent('ps-housing:client:removeProperty', function (property_id)
	local property = PropertiesTable[property_id]

	if property then
		property:RemoveProperty()
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
    for propertyId, v in pairs(PropertiesTable) do
        if v.inShell then
            propertyObj = v.shellObj
            break
        end
    end

    local shellCoords = GetEntityCoords(propertyObj)

    while findingOffset do
        local ped = cache.ped
        local coords = GetEntityCoords(ped)
        local x = math.floor((coords.x - shellCoords.x) * 10000) / 10000
        local y = math.floor((coords.y - shellCoords.y) * 10000) / 10000
        local z = math.floor((coords.z - shellCoords.z) * 10000) / 10000
        local heading = math.floor(GetEntityHeading(ped) * 10000) / 10000

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
			v:RemoveProperty()
		end

        for k, v in pairs(ApartmentsTable) do
            v:DeleteApartment()
        end
	end
end)

lib.callback.register('ps-housing:cb:confirmPurchase', function(amount, label, id)
    return lib.alertDialog({
        header = 'Purchase Confirmation',
        content = 'Are you sure you want to purchase '..label..' - ' .. id .. ' for $' .. amount .. '?',
        centered = true,
        cancel = true,
        labels = {
            confirm = "Purchase",
            cancel = "Cancel"
        }
    })
end)

lib.callback.register('ps-housing:cb:confirmRaid', function(label, id)
    return lib.alertDialog({
        header = 'Raid',
        content = 'Do you want to raid '..label..' - ' .. id .. '?',
        centered = true,
        cancel = true,
        labels = {
            confirm = "Raid",
            cancel = "Cancel"
        }
    })
end)

lib.callback.register('ps-housing:cb:ringDoorbell', function()
    return lib.alertDialog({
        header = 'Ring Doorbell',
        content = 'You dont have a key for this property, would you like to ring the doorbell?',
        centered = true,
        cancel = true,
        labels = {
            confirm = "Ring",
            cancel = "Cancel"
        }
    })
end)