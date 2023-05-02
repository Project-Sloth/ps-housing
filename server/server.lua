QBCore = exports['qb-core']:GetCoreObject()

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
                property_id = id,
                owner = v.owner_citizenid,
                label = v.label,
                description = v.description,
                has_access = json.decode(v.has_access),
                extra_imgs = json.decode(v.extra_imgs),
                furnitures = json.decode(v.furnitures),
                for_sale = v.for_sale,
                price = v.price,
                shell = v.shell,
                door_data = json.decode(v.door_data),
                garage_data = json.decode(v.garage_data),
            }
            PropertiesTable[id] = Property:new(propertyData)
        end
    end)
end)

QBCore.Functions.CreateCallback("ps-housing:server:requestProperties", function(source, cb)
    local propertiesData = {}
    for k, v in pairs(PropertiesTable) do
        propertiesData[k] = v.propertyData
    end
    cb(propertiesData)
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
        ["@for_sale"] = propertyData.for_sale and 1 or 0,
        ["@price"] = propertyData.price,
        ["@shell"] = propertyData.shell,
        ["@door_data"] = json.encode(propertyData.door_data),
        ["@garage_data"] = json.encode(propertyData.garage_data),
    })
    propertyData.property_id = id
    PropertiesTable[id] = Property:new(propertyData)
    print("Registered property: "..id.. " - "..propertyData.label .. " by: ".. GetPlayerName(propertyData.realtorSrc))
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