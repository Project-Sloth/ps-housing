local AptNames = {
    ['apartment1'] = "South Rockford Drive",
    ["apartment2"] = "Morningwood Blvd",
    ["apartment3"] = "Integrity Way",
    ["apartment4"] = "Tinsel Towers",
    ["apartment5"] = "Fantastic Plaza",
}

local Shells = {
    [1] = `shell_v16low`,
    [2] = `shell_v16mid`,
    [3] = `shell_trevor`,
    [4] = `shell_trailer`,
    [5] = `shell_lester`,
    [6] = `shell_ranch`,
    [7] = `container_shell`,
    [8] = `furnitured_midapart`,
    [9] = `modernhotel_shell`,
    [10] = `shell_frankaunt`,
    [11] = `shell_garagem`,
    [12] = `shell_michael`,
    [13] = `shell_office1`,
    [14] = `shell_store1`,
    [15] = `shell_warehouse1`
}

RegisterCommand("migrateapartments", function()

    local properties = {}

    local qbApt = MySQL.Sync.fetchAll("SELECT * FROM apartments")

    CreateThread(function()
        for i = 1, #qbApt do
            local apt = qbApt[i]

            local aptName = AptNames[apt.type]
            local propertyData = {
                owner = apt.citizenid,
                label = aptName .. " Apartment " .. tostring(i),
                description = "This is " .. aptName .. " Apartment " .. tostring(i),
                for_sale = 0,    
                shell = Config.Apartments[aptName].shell,
                apartment = aptName,
            }

            TriggerEvent("ps-housing:server:registerProperty", propertyData)
        end
        print("Finished migrating apartments")
    end)
end, true)

RegisterNetEvent('ps-housing:server:migratehouses', function()
    if not source or source == 0 then return end
    local src = source
    local qbHouses = MySQL.Sync.fetchAll("SELECT * FROM player_houses")
    local qbHouseLocations = MySQL.Sync.fetchAll("SELECT * FROM houselocations")

    local formattedHouses = {}
    for _,v in pairs(qbHouses) do
        formattedHouses[v.house] = v
    end

    CreateThread(function()
        for i = 1, #qbHouseLocations do
            local house = qbHouseLocations[i]
            local ownedHouse = formattedHouses[house.name]
            local owner = ownedHouse and ownedHouse.citizenid
            local sale = 0
            local keyholders = ownedHouse and json.decode(ownedHouse.keyholders) or {}
            if not ownedHouse then
                sale = 1
            end

            local houseCoords = json.decode(house.coords)
            local clientData = lib.callback.await("ps-housing:client:getclientdata", src, {coords = houseCoords.enter})

            local door = {
                x = math.floor(houseCoords.enter.x * 10000) / 10000,
                y = math.floor(houseCoords.enter.y * 10000) / 10000,
                z = math.floor(houseCoords.enter.z * 10000) / 10000,
                h = math.floor(houseCoords.enter.h * 10000) / 10000,
                length = 1.5,
                width = 2.2,
                locked = true
            }

            local garageCoords = json.decode(house.garage)
            local garage = nil
            if garageCoords then
                garage = {
                    x = math.floor(garageCoords.x * 10000) / 10000,
                    y = math.floor(garageCoords.y * 10000) / 10000,
                    z = math.floor(garageCoords.z * 10000) / 10000,
                    h = math.floor(garageCoords.h * 10000) / 10000,
                    length = 3.0,
                    width = 5.0,
                }
            end

            local shell = "Apartment Unfurnished"
            for k,v in pairs(Config.Shells) do
                if v.hash == Shells[house.tier] then
                    shell = k
                end
            end

            local propertyData = {
                owner = owner,
                street = clientData.street,
                region = clientData.region,
                description = house.label,
                has_access = keyholders,
                for_sale = sale,
                price = house.price,
                shell = shell,
                door_data = door,
                garage_data = garage
            }

            TriggerEvent("ps-housing:server:registerProperty", propertyData)
        end
        print("Finished migrating houses")
    end)
end)
