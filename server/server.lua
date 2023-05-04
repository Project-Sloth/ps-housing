QBCore = exports['qb-core']:GetCoreObject()
local dbloaded = false
PropertiesTable = {}
MySQL.ready(function()
    MySQL.query('SELECT * FROM properties', {}, function(result)
        if not result then return end
        if result.id then -- If only one result
            result = {result}
        end
        for _, v in pairs(result) do
            local id = tonumber(v.property_id)
            local propertyData = {
                property_id = tostring(id),
                owner = v.owner_citizenid,
                label = v.label,
                description = v.description,
                has_access = json.decode(v.has_access),
                extra_imgs = json.decode(v.extra_imgs),
                furnitures = json.decode(v.furnitures),
                for_sale = v.for_sale,
                price = v.price,
                shell = v.shell,
                apartment = v.apartment,
                door_data = json.decode(v.door_data),
                garage_data = json.decode(v.garage_data),
            }
            PropertiesTable[tostring(id)] = Property:new(propertyData)
        end
        dbloaded = true
    end)
end)

lib.callback.register("ps-housing:server:requestProperties", function(source)
    while not dbloaded do
        Wait(100)
    end
    local propertiesData = {}
    for k, v in pairs(PropertiesTable) do
        propertiesData[k] = v.propertyData
    end
    return propertiesData
end)

AddEventHandler("ps-housing:server:registerProperty", function (propertyData) -- triggered by realtor job
    local propertyData = propertyData
    propertyData.owner = propertyData.owner or nil
    propertyData.has_access = propertyData.has_access or {}
    propertyData.extra_imgs = propertyData.extra_imgs or {}
    propertyData.furnitures = propertyData.furnitures or {}
    propertyData.door_data = propertyData.door_data or {}
    propertyData.garage_data = propertyData.garage_data or {}
    local id = MySQL.insert.await("INSERT INTO properties (owner_citizenid, label, description, has_access, extra_imgs, furnitures, for_sale, price, shell, door_data, garage_data) VALUES  (@owner_citizenid, @label, @description, @has_access, @extra_imgs, @furnitures, @for_sale, @price, @shell, @door_data, @garage_data)", {
        ["@owner_citizenid"] = propertyData.owner or nil,
        ["@label"] = propertyData.label,
        ["@description"] = propertyData.description,
        ["@has_access"] = json.encode(propertyData.has_access),
        ["@extra_imgs"] = json.encode(propertyData.extra_imgs),
        ["@furnitures"] = json.encode(propertyData.furnitures),
        ["@for_sale"] = 1,
        ["@price"] = propertyData.price,
        ["@shell"] = propertyData.shell,
        ["@door_data"] = json.encode(propertyData.door_data),
        ["@garage_data"] = json.encode(propertyData.garage_data),
    })
    propertyData.property_id = tostring(id)
    PropertiesTable[id] = Property:new(propertyData)
    TriggerClientEvent("ps-housing:client:addProperty", -1, propertyData)
end)

AddEventHandler("ps-housing:server:updateProperty", function(type, property_id, data)
    local property = PropertiesTable[property_id]
    if not property then return end
    property[type](property, data)
    if type == "DeleteProperty" then
        PropertiesTable[property_id] = nil
    else 
        TriggerClientEvent("ps-housing:client:updateProperty", -1, property.propertyData)
    end
end)

local function getCitizenid(src)
    local src = src
    local Player = QBCore.Functions.GetPlayer(src)
    local PlayerData = Player.PlayerData
    local citizenid = PlayerData.citizenid
    return citizenid
end
lib.callback.register("ps-housing:cb:getVehicles", function(source, garageName, property_id)
    local src = source
    local garageName = garageName
    local citizenid = getCitizenid(src)
    local property = PropertiesTable[property_id]
    if not property then return end
    if not property:CheckForAccess(citizenid) then return end
    local citizenidCheck = Config.CanGarageAnyVehicle and " citizenid = @citizenid AND" or ""
    local vehicles = MySQL.query.await('SELECT * FROM player_vehicles WHERE'..citizenidCheck..' garage = @garage AND state = @state', 
    {
        ['@citizenid'] = citizenid,
        ['@garage'] = garageName,
        ['@state'] = 1,
    })
    return vehicles
end)

RegisterNetEvent("ps-housing:server:takeOutVehicle", function(data)
    local src = source
    local vehicle = data.vehicle
    local property_id = data.property_id
    local citizenid = getCitizenid(src)
    local property = PropertiesTable[property_id]
    if not property then return end
    if not property:CheckForAccess(citizenid) then return end
    TriggerClientEvent("ps-housing:client:takeOutVehicle", src, {vehicle = vehicle, property_id = property_id})
end)

RegisterNetEvent("ps-housing:server:updateVehicle", function(state, fuel, engine, body, plate, garageName)
    local src = source
    local citizenid = getCitizenid(src)
    local owned = MySQL.query.await('SELECT * FROM player_vehicles WHERE citizenid = @citizenid AND plate = @plate', 
    {
        ['@citizenid'] = citizenid,
        ['@plate'] = plate,
    })
    if owned[1] then
        MySQL.update('UPDATE player_vehicles SET state = @state, fuel = @fuel, engine = @engine, body = @body, garage = @garage WHERE plate = @plate', 
        {
            ['@state'] = state,
            ['@fuel'] = fuel,
            ['@engine'] = engine,
            ['@body'] = body,
            ['@garage'] = garageName,
            ['@plate'] = plate,
        })
    else
        TriggerClientEvent('QBCore:Notify', src, "You arent allowed to store this vehicle.", 'error')
    end
end)

lib.callback.register("ps-housing:cb:spawnVehicle", function (source, vehicle, coords)
    local src = source
    local vehicle = vehicle
    local coords = coords
    -- Spawn vehicle
    local veh = CreateVehicle(vehicle.vehicle, coords.x, coords.y, coords.z, coords.w, true, true)
    SetEntityAsMissionEntity(veh, true, true)
    SetEntityHeading(veh, coords.w)
    SetVehicleNumberPlateText(veh, vehicle.plate)

    -- Set vehicle as out
    MySQL.update('UPDATE player_vehicles SET state = @stateWHERE plate = @plate', 
    {
        ['@state'] = 0,
        ['@plate'] = vehicle.plate,
    })

    -- Get vehicle props
    local vehProps = {}
    local result = MySQL.query.await('SELECT mods FROM player_vehicles WHERE plate = ?', {vehicle.plate})
    if result[1] then vehProps = json.decode(result[1].mods) end
    local netId = NetworkGetNetworkIdFromEntity(veh)

    -- Set Vehicle as out in qb garage table
    TriggerEvent("qb-garages:server:UpdateOutsideVehicle", vehicle.plate, netId)
    return netId, vehProps
end)

lib.callback.register("ps-housing:cb:allowedToStore", function (source, plate, property_id)
    local src = source
    local plate = plate
    local property = PropertiesTable[property_id]
    if not property then return false end
    local citizenid = getCitizenid(src)
    if not property:CheckForAccess(citizenid) then return false end
    local result = MySQL.query.await('SELECT * FROM player_vehicles WHERE plate = @plate', {['@plate'] = plate})
    if result[1] then
        MySQL.update('UPDATE player_vehicles SET state = @state WHERE plate = @plate', 
        {
            ['@state'] = 1,
            ['@plate'] = plate,
        })
        return true
    else
        return false
    end
end)