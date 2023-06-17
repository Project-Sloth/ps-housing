QBCore = exports['qb-core']:GetCoreObject()
PSCore = exports['ps-core']:GetCoreObject()
PropertiesTable = {}

local dbloaded = false
MySQL.ready(function()
    MySQL.query('SELECT * FROM properties', {}, function(result)
        if not result then return end

        if result.id then -- If only one result
            result = {result}
        end

        for _, v in pairs(result) do
            local id = tostring(v.property_id)
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
            PropertiesTable[id] = Property:new(propertyData)
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

    local cols = "(owner_citizenid, label, description, has_access, extra_imgs, furnitures, for_sale, price, shell, apartment, door_data, garage_data)"
    local vals = "(@owner_citizenid, @label, @description, @has_access, @extra_imgs, @furnitures, @for_sale, @price, @shell, @apartment, @door_data, @garage_data)"

    local id = MySQL.insert.await("INSERT INTO properties " .. cols .. " VALUES " .. vals , {
        ["@owner_citizenid"] = propertyData.owner or nil,
        ["@label"] = propertyData.label,
        ["@description"] = propertyData.description,
        ["@has_access"] = json.encode(propertyData.has_access),
        ["@extra_imgs"] = json.encode(propertyData.extra_imgs),
        ["@furnitures"] = json.encode(propertyData.furnitures),
        ["@for_sale"] = propertyData.for_sale or 1,
        ["@price"] = propertyData.price or 0,
        ["@shell"] = propertyData.shell,
        ["@apartment"] = propertyData.apartment,
        ["@door_data"] = json.encode(propertyData.door_data),
        ["@garage_data"] = json.encode(propertyData.garage_data),
    })
    id = tostring(id)
    propertyData.property_id = id
    PropertiesTable[id] = Property:new(propertyData)

    TriggerClientEvent("ps-housing:client:addProperty", -1, propertyData)

    if propertyData.apartment then
        local player = QBCore.Functions.GetPlayerByCitizenId(propertyData.owner)
        local src = player.PlayerData.source

        Wait(1000)

        local property = PropertiesTable[id]
        property:PlayerEnter(src)

        Wait(500)

        TriggerClientEvent("qb-clothes:client:CreateFirstCharacter", src)
    end
end)

lib.callback.register("ps-housing:cb:GetOwnedApartment", function(source, cid)
    Debug("ps-housing:cb:GetOwnedApartment", source, cid)
    if cid ~= nil then
        local result = MySQL.query.await('SELECT * FROM properties WHERE owner_citizenid = ? AND apartment IS NOT NULL AND apartment <> ""', { cid })
        if result[1] ~= nil then
            return result[1]
        end
        return nil
    else
        local src = source
        local Player = QBCore.Functions.GetPlayer(src)
        local result = MySQL.query.await('SELECT * FROM apartments WHERE owner_citizenid = ? AND apartment IS NOT NULL AND apartment <> ""', { Player.PlayerData.citizenid })
        if result[1] ~= nil then
            return result[1]
        end
        return nil
    end
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

RegisterNetEvent("ps-housing:server:createNewApartment", function(aptLabel)
    local src = source

    if not Config.StartingApartment then return end
    local citizenid, PlayerData = GetCitizenid(src)

    local apartment = Config.Apartments[aptLabel]
    if not apartment then return end

    local propertyData = {
        owner = citizenid,
        label = string.format("%s Apartment", apartment.label),
        description = string.format("This is %s's apartment in %s", PlayerData.charinfo.firstname .. " " .. PlayerData.charinfo.lastname, apartment.label),
        for_sale = 0,
        shell = apartment.shell,
        apartment = apartment.label,
    }

    Debug("Creating new apartment for " .. GetPlayerName(src) .. " in " .. apartment.label)
    TriggerEvent("ps-housing:server:registerProperty", propertyData)
end)

RegisterNetEvent('qb-apartments:returnBucket', function()
    local src = source
    SetPlayerRoutingBucket(src, 0)
end)

AddEventHandler("ps-housing:server:addTenantToApartment", function (data)
    local apartment = data.apartment
    local targetSrc = data.targetSrc
    local realtorSrc = data.realtorSrc
    local targetCitizenid = GetCitizenid(targetSrc)

    -- id of current apartment so we can change it
    local property_id = nil

    for k, v in pairs(PropertiesTable) do
        local propertyData = v.propertyData
        if propertyData.owner == targetCitizenid then
            if propertyData.apartment == apartment then
                lib.Notify(targetSrc, "You are already in this apartment", "error")
                lib.Notify(realtorSrc, "This person is already in this apartment", "error")
                return
            elseif #propertyData.apartment > 1 then
                property_id = propertyData.property_id
                break
            end
        end
    end

    local property = PropertiesTable[property_id]
    if not property then return end

    property:UpdateApartment(data)

    local citizenid = GetCitizenid(targetSrc)
    local targetToAdd = QBCore.Functions.GetPlayerByCitizenId(citizenid)
    local targetPlayer = targetToAdd.PlayerData

    lib.Notify(targetSrc, "Your apartment is now at "..apartment, "success")
    lib.Notify(realtorSrc, "You have added ".. targetPlayer.charinfo.firstname .. " " .. targetPlayer.charinfo.lastname .. " to apartment "..apartment, "success")

    TriggerClientEvent("ps-housing:client:updateProperty", -1, property.propertyData)
end)

lib.callback.register("ps-housing:cb:allowedToStore", function (source, plate, property_id)
    local src = source
    local plate = plate

    local property = PropertiesTable[property_id]
    if not property then return false end

    local citizenid = GetCitizenid(src)
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


function GetCitizenid(src)
    local Player = QBCore.Functions.GetPlayer(src)
    local PlayerData = Player.PlayerData
    local citizenid = PlayerData.citizenid
    return citizenid, PlayerData, Player
end

if PSCore then
    PSCore.Functions.CheckForUpdates()
    PSCore.Functions.CheckResourceName()
end