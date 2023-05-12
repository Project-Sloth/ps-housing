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
	PropertiesTable[tostring(property.property_id)] = Property:new(property)
	if GetResourceState('bl-realtor') == 'started' then
		local properties = getProperties()
		TriggerEvent("bl-realtor:client:updateProperties", properties)

        if property.apartment then
            if #property.apartment > 1 then
                TriggerEvent("bl-realtor:client:updateApartments", getApartments())
            end
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


AddEventHandler("QBCore:Client:OnPlayerLoaded", function()
    local properties = lib.callback.await('ps-housing:server:requestProperties')
    for k, v in pairs(properties) do
        createProperty(v)
    end
end)

AddEventHandler("onResourceStart", function(resourceName)
	if (GetCurrentResourceName() == resourceName) then
        for k, v in pairs(Config.Apartments) do
            ApartmentsTable[k] = Apartment:new(v)
        end

        local properties = lib.callback.await('ps-housing:server:requestProperties')
        for k, v in pairs(properties) do
            createProperty(v)
        end
	end
end)

-- Garage Stuff because the way qb did it with houses is the most retarded shit ever.
AddEventHandler("ps-housing:client:handleGarage", function (gargeName, property_id)
    local garageName = gargeName
    local propertyVehicles = lib.callback.await("ps-housing:cb:getVehicles", gargeName, property_id)
    local menu = {
        id = gargeName,
        title = "People at the door",
        options = {}
    }

    for _, v in pairs(propertyVehicles) do
        local enginePercent = math.floor(v.engine / 10)
        local bodyPercent = math.floor(v.body / 10)
        local currentFuel = v.fuel
        local vname = QBCore.Shared.Vehicles[v.vehicle].name

        -- only if its garaged
        if not v.state == 1 then goto continue end

        menu.options[#menu.options+1] = {
            title = vname .. " " .. v.plate,
            txt = string.format("Plate: %s<br>Fuel: %%s | Engine: %%s | Body: %%s", v.plate, currentFuel, enginePercent, bodyPercent),
            serverEvent = "ps-housing:server:takeOutVehicle",
            args = {
                vehicle = v,
                property_id = property_id,
            }
        }
        
        ::continue::

    end

    if #menu.options == 0 then
        menu.options[#menu.options+1] = {
            title = "No vehicles in garage",
            txt = "There are no vehicles in this garage",
            disabled = true
        }
    end

    lib.menu.showMenu(menu)
end)

local function doCarDamage(currentVehicle, veh)
    local engine = veh.engine + 0.0
    local body = veh.body + 0.0
    local data = json.decode(veh.mods)
    for k, v in pairs(data.doorStatus) do
        if v then
            SetVehicleDoorBroken(currentVehicle, tonumber(k), true)
        end
    end
    for k, v in pairs(data.tireBurstState) do
        if v then
            SetVehicleTyreBurst(currentVehicle, tonumber(k), true)
        end
    end
    for k, v in pairs(data.windowStatus) do
        if not v then
            SmashVehicleWindow(currentVehicle, tonumber(k))
        end
    end
    SetVehicleEngineHealth(currentVehicle, engine)
    SetVehicleBodyHealth(currentVehicle, body)
end

RegisterNetEvent("ps-housing:client:takeOutVehicle", function(data)
    local vehicle = data.vehicle
    local property = PropertiesTable[data.property_id]
    local garage_data = property.propertyData.garage_data
    local garageCoords = vector4(garage_data.x, garage_data.y, garage_data.z, garage_data.h)
    local netId, vehProps = lib.callback.await("ps-housing:cb:spawnVehicle", vehicle, garageCoords)
    local veh = NetToVeh(netId)
    QBCore.Functions.SetVehicleProperties(veh, vehProps)
    exports[Config.Fuel]:SetFuel(veh, vehicle.fuel)
    doCarDamage(veh, vehicle)

    local engine = vehicle.engine + 0.0
    local body = vehicle.body + 0.0
    local data = json.decode(vehicle.mods)

    for k, v in pairs(data.doorStatus) do
        if v then
            SetVehicleDoorBroken(veh, tonumber(k), true)
        end
    end

    for k, v in pairs(data.tireBurstState) do
        if v then
            SetVehicleTyreBurst(veh, tonumber(k), true)
        end
    end

    for k, v in pairs(data.windowStatus) do
        if not v then
            SmashVehicleWindow(veh, tonumber(k))
        end
    end

    SetVehicleEngineHealth(veh, engine)
    SetVehicleBodyHealth(veh, body)

    TriggerEvent("vehiclekeys:client:SetOwner", QBCore.Functions.GetPlate(veh))
    SetVehicleEngineOn(veh, true, true)
end)

AddEventHandler("ps-housing:client:storeVehicle", function(garageName)
    local veh = cache.veh
    local garageName = garageName
    local plate = QBCore.Functions.GetPlate(veh)

    local owned = lib.callback.await("ps-housing:cb:allowedToStore", plate, garageName)
    if not owned then
        lib.notify({title="You do not own this vehicle or do not have access to the property garage", type="error"})
        return
    end

    local bodyDamage = math.ceil(GetVehicleBodyHealth(veh))
    local engineDamage = math.ceil(GetVehicleEngineHealth(veh))
    local totalFuel = exports['LegacyFuel']:GetFuel(veh)

    TriggerServerEvent('qb-garages:server:UpdateOutsideVehicle', plate, nil)
    TriggerServerEvent('ps-housing:server:updateVehicle', 1, totalFuel, engineDamage, bodyDamage, plate, garageName)

    SetVehicleDoorsLocked(veh)
    
    Wait(1500)

    SetEntityAsMissionEntity(veh, true, true)
    DeleteVehicle(veh)
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
    print("The marker showing is the door_data boxzone that will be created. Make sure the door_data is inside for the target to work. \n"
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
