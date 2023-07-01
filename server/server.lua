QBCore = exports['qb-core']:GetCoreObject()
PSCore = exports['ps-core']:GetCoreObject()

PropertiesTable = {}

PSCore.Resource.CheckForUpdates()
PSCore.Resource.CheckResourceName()

local dbloaded = false
MySQL.ready(function()
    MySQL.query('SELECT * FROM properties', {}, function(result)
        if not result then
            return
        end

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
                garage_data = json.decode(v.garage_data)
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

AddEventHandler("ps-housing:server:registerProperty", function(propertyData) -- triggered by realtor job
    local propertyData = propertyData

    propertyData.owner = propertyData.owner or nil
    propertyData.has_access = propertyData.has_access or {}
    propertyData.extra_imgs = propertyData.extra_imgs or {}
    propertyData.furnitures = propertyData.furnitures or {}
    propertyData.door_data = propertyData.door_data or {}
    propertyData.garage_data = propertyData.garage_data or {}

    local Player = propertyData.owner and QBCore.Functions.GetPlayerByCitizenId(propertyData.owner) or nil
    local name
    if Player then
        name = Player.PlayerData.charinfo.firstname .. " " .. Player.PlayerData.charinfo.lastname
    else
        name = "Unowned"
    end

    local cols =
        "(owner_citizenid, label, description, has_access, extra_imgs, furnitures, for_sale, price, shell, apartment, door_data, garage_data)"
    local vals =
        "(@owner_citizenid, @label, @description, @has_access, @extra_imgs, @furnitures, @for_sale, @price, @shell, @apartment, @door_data, @garage_data)"

    local id = MySQL.insert.await("INSERT INTO properties " .. cols .. " VALUES " .. vals, {
        ["@owner_citizenid"] = propertyData.owner or nil,
        ["@label"] = propertyData.label .. " " .. name,
        ["@description"] = propertyData.description,
        ["@has_access"] = json.encode(propertyData.has_access),
        ["@extra_imgs"] = json.encode(propertyData.extra_imgs),
        ["@furnitures"] = json.encode(propertyData.furnitures),
        ["@for_sale"] = propertyData.for_sale or 1,
        ["@price"] = propertyData.price or 0,
        ["@shell"] = propertyData.shell,
        ["@apartment"] = propertyData.apartment,
        ["@door_data"] = json.encode(propertyData.door_data),
        ["@garage_data"] = json.encode(propertyData.garage_data)
    })
    id = tostring(id)
    propertyData.property_id = id
    PropertiesTable[id] = Property:new(propertyData)

    TriggerClientEvent("ps-housing:client:addProperty", -1, propertyData)

    if propertyData.apartment then
        local player = QBCore.Functions.GetPlayerByCitizenId(propertyData.owner)
        local src = player.PlayerData.source

        local property = PropertiesTable[id]
        property:PlayerEnter(src)

        Wait(1000)

        TriggerClientEvent("qb-clothes:client:CreateFirstCharacter", src)

        Framework[Config.Notify].Notify(src, "Open radial menu for furniture menu and place down your stash and clothing locker.", "info")
    end
end)

lib.callback.register("ps-housing:cb:GetOwnedApartment", function(source, cid)
    Debug("ps-housing:cb:GetOwnedApartment", source, cid)
    if cid ~= nil then
        local result = MySQL.query.await(
            'SELECT * FROM properties WHERE owner_citizenid = ? AND apartment IS NOT NULL AND apartment <> ""', {cid})
        if result[1] ~= nil then
            return result[1]
        end
        return nil
    else
        local src = source
        local Player = QBCore.Functions.GetPlayer(src)
        local result = MySQL.query.await(
            'SELECT * FROM apartments WHERE owner_citizenid = ? AND apartment IS NOT NULL AND apartment <> ""',
            {Player.PlayerData.citizenid})
        if result[1] ~= nil then
            return result[1]
        end
        return nil
    end
end)

AddEventHandler("ps-housing:server:updateProperty", function(type, property_id, data)
    local property = PropertiesTable[tostring(property_id)]
    if not property then return end

    property[type](property, data)

    if type == "DeleteProperty" then
        PropertiesTable[tostring(property_id)] = nil
    else 
        TriggerClientEvent("ps-housing:client:updateProperty", -1, property.propertyData)
    end
end)

RegisterNetEvent("ps-housing:server:createNewApartment", function(aptLabel)
    local src = source
    if not Config.StartingApartment then return end
    local citizenid = GetCitizenid(src)
    local PlayerData = GetPlayerData(src)

    local apartment = Config.Apartments[aptLabel]
    if not apartment then
        return
    end

    local propertyData = {
        owner = citizenid,
        label = string.format("%s Apartment", apartment.label),
        description = string.format("This is %s's apartment in %s",
            PlayerData.charinfo.firstname .. " " .. PlayerData.charinfo.lastname, apartment.label),
        for_sale = 0,
        shell = apartment.shell,
        apartment = apartment.label
    }

    Debug("Creating new apartment for " .. GetPlayerName(src) .. " in " .. apartment.label)
    TriggerEvent("ps-housing:server:registerProperty", propertyData)
end)

RegisterNetEvent('qb-apartments:returnBucket', function()
    local src = source
    SetPlayerRoutingBucket(src, 0)
end)

AddEventHandler("ps-housing:server:addTenantToApartment", function(data)
    local apartment = data.apartment
    local targetSrc = tonumber(data.targetSrc)
    local realtorSrc = data.realtorSrc
    local targetCitizenid = GetCitizenid(targetSrc, realtorSrc)

    -- id of current apartment so we can change it
    local property_id = nil

    for _, v in pairs(PropertiesTable) do
        local propertyData = v.propertyData
        if propertyData.owner == targetCitizenid then
            if propertyData.apartment == apartment then
                Framework[Config.Notify].Notify(targetSrc, "You are already in this apartment", "error")
                Framework[Config.Notify].Notify(targetSrc, "This person is already in this apartment", "error")

                return
            elseif #propertyData.apartment > 1 then
                property_id = propertyData.property_id
                break
            end
        end
    end

    local property = PropertiesTable[tostring(property_id)]
    if not property then return end

    property:UpdateApartment(data)

    local citizenid = GetCitizenid(targetSrc, realtorSrc)
    local targetToAdd = QBCore.Functions.GetPlayerByCitizenId(citizenid)
    local targetPlayer = targetToAdd.PlayerData

    Framework[Config.Notify].Notify(targetSrc, "Your apartment is now at "..apartment, "success")
    Framework[Config.Notify].Notify(realtorSrc, "You have added ".. targetPlayer.charinfo.firstname .. " " .. targetPlayer.charinfo.lastname .. " to apartment "..apartment, "success")
    
    TriggerClientEvent("ps-housing:client:updateProperty", -1, property.propertyData)
end)

lib.callback.register("ps-housing:cb:allowedToStore", function(source, plate, property_id)
    local src = source
    local plate = plate

    local property = PropertiesTable[tostring(property_id)]
    if not property then return false end

    local citizenid = GetCitizenid(src, src)
    if not property:CheckForAccess(citizenid) then return false end

    if result[1] then
        MySQL.update('UPDATE player_vehicles SET state = @state WHERE plate = @plate', {
            ['@state'] = 1,
            ['@plate'] = plate
        })
        return true
    else
        return false
    end
end)

exports('IsOwner', function(src, property_id)
    local property = PropertiesTable[tostring(property_id)]
    if not property then return false end

    local citizenid = GetCitizenid(src, src)
    return property:CheckForAccess(citizenid)
end)

function GetCitizenid(targetSrc, callerSrc)
    local Player = QBCore.Functions.GetPlayer(tonumber(targetSrc))
    if not Player then
        Framework[Config.Notify].Notify(callerSrc, "Player not found.", "error")
        return
    end
    local PlayerData = Player.PlayerData
    local citizenid = PlayerData.citizenid
    return citizenid
end

function GetCharName(src)
    local Player = QBCore.Functions.GetPlayer(tonumber(src))
    if not Player then return end
    local PlayerData = Player.PlayerData
    return PlayerData.charinfo.firstname .. " " .. PlayerData.charinfo.lastname
end

function GetPlayerData(src)
    local Player = QBCore.Functions.GetPlayer(tonumber(src))
    if not Player then return end
    local PlayerData = Player.PlayerData
    return PlayerData
end

function GetPlayer(src)
    local Player = QBCore.Functions.GetPlayer(tonumber(src))
    if not Player then return end
    return Player
end
