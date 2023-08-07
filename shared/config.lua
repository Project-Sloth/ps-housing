PropertiesTable = {}
ApartmentsTable = {}

exports('GetProperties', function() return PropertiesTable end)
exports('GetApartments', function() return ApartmentsTable end)

Config = {}

-- If you're not utilizing ox_lib, it's time to question your approach.
Config.Target = "ox" -- "ox" or "qb"
Config.Notify = "ox" -- "ox" or "qb"
Config.Radial = "ox" -- "ox" or "qb"
Config.Inventory = "qb" -- "ox" or "qb"
Config.Logs = "qb" -- "qb" or "lib"

-- Anyone provided with keys to a property has the ability to modify its furnishings.
Config.AccessCanEditFurniture = true

-- Draw the poly for the property
Config.DebugMode = true

function Debug(...)
    if Config.DebugMode then
        print(...)
    end
end

-- Log System
Config.EnableLogs = true

-- Enables Dynamic Doors
Config.DynamicDoors = false

Config.PoliceJobNames = {  -- add multiple police jobs that are allowed to raid properties!
    "police",
    -- "police2",
    -- "police3",
}

Config.MinGradeToRaid = 3  -- Minimum grade to raid a property

Config.RaidTimer = 5-- 5 minutes

Config.RealtorJobName = "realtor" -- Set your Real Estate job here

-- Realtor Commisions based on job grade, the rest goes to the owner, if any.
Config.Commissions = {
    [0] = 0.05, -- 5% commision for each sale
    [1] = 0.10,
    [2] = 0.15,
    [3] = 0.20,
}

Config.FurnitureTypes = {
    ["storage"] = function(entity, property_id, shell, furniture, count)
        local stash = string.format("property_%s", property_id) -- if you changed this you will fuck things up

        Framework[Config.Target].AddTargetEntity(entity, "Storage", "fas fa-box-open", function()
            local stashConfig = Config.Shells[shell].stash
            Framework[Config.Inventory].OpenInventory(stash, stashConfig)
        end)

        local property = Property.Get(property_id)
        property.storageTarget = entity
    end,

    ["clothing"] = function(entity, property_id, shell, furniture, count)
        Framework[Config.Target].AddTargetEntity(entity, "Clothing", "fas fa-shirt", function()
            local heading = GetEntityHeading(cache.ped)
            SetEntityHeading(cache.ped, heading - 180.0)
            TriggerEvent("qb-clothing:client:openOutfitMenu")
        end)

        local property = Property.Get(property_id)
        property.clothingTarget = entity
    end
}