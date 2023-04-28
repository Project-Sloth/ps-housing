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
                garage = json.decode(v.garage_data),
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

AddEventHandler("ps-housing:server:addProperty", function (propertyData) -- triggered by realtor job
    local id = MySQL.insert("INSERT INTO properties (owner, label, description, has_access, extra_imgs, furnitures, for_sale, price, shell, door_data, garage_data) VALUES  (@owner, @label, @description, @has_access, @extra_imgs, @furnitures, @for_sale, @price, @shell, @door_data, @garage_data)", {
        ["@owner"] = propertyData.owner,
        ["@label"] = propertyData.label,
        ["@description"] = propertyData.description,
        ["@has_access"] = json.encode(propertyData.has_access),
        ["@extra_imgs"] = json.encode(propertyData.extra_imgs),
        ["@furnitures"] = json.encode(propertyData.furnitures),
        ["@for_sale"] = propertyData.for_sale,
        ["@price"] = propertyData.price,
        ["@shell"] = propertyData.shell,
        ["@door_data"] = propertyData.door_data,
        ["@garage_data"] = propertyData.garage,
    })
    propertyData.property_id = id
    PropertiesTable[id] = Property:new(propertyData)
    TriggerClientEvent("ps-housing:client:addProperty", -1, propertyData)
end)

AddEventHandler("ps-housing:server:deleteProperty", function (property_id) -- triggered by realtor job
    local property = PropertiesTable[property_id]
    if not property then return end
    property:DeleteProperty()
    PropertiesTable[property_id] = nil
    TriggerClientEvent("ps-housing:client:deleteProperty", -1, property_id)
end)