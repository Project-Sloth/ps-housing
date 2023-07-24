Framework = {}


if IsDuplicityVersion() then
    Framework.ox = {}
    Framework.qb = {}

    function Framework.ox.Notify(src, message, type)
        type = type == "inform" and "info" or type
        TriggerClientEvent("ox_lib:notify", src, { title = "Property", description = message, type = type })
    end

    function Framework.qb.Notify(src, message, type)
        type = type == "info" and "primary" or type
        TriggerClientEvent('QBCore:Notify', src, message, type)
    end

    return
end

local function hasApartment(apts)
    for propertyId, _ in pairs(apts) do
        local property = PropertiesTable[propertyId]
        if property.owner then
            return true
        end
    end

    return false
end

Framework.qb = {
    Notify = function(message, type)
        type = type == "info" and "primary" or type
        TriggerEvent('QBCore:Notify', message, type)
    end,
    AddEntrance = function(coords, size, heading, propertyId, enter, raid, showcase, showData, targetName)
        local property_id = propertyId
        exports["qb-target"]:AddBoxZone(
            targetName,
            vector3(coords.x, coords.y, coords.z),
            size.x,
            size.y,
            {
                name = targetName,
                heading = heading,
                debugPoly = Config.DebugMode,
                minZ = coords.z - 1.5,
                maxZ = coords.z + 2.0,
            },
            {
                options = {
                    {
                        label = "Enter Property",
                        action = enter,
                        canInteract = function()
                            local property = Property.Get(property_id)
                            return property.has_access or property.owner
                        end,
                    },
                    {
                        label = "Showcase Property",
                        action = showcase,
                        canInteract = function()
                            local PlayerData = QBCore.Functions.GetPlayerData()
                            local job = PlayerData.job
                            local jobName = job.name
                            local onDuty = job.onduty
                            return jobName == "realtor" and onDuty
                        end,
                    },
                    {
                        label = "Property Info",
                        action = showData,
                        canInteract = function()
                            local PlayerData = QBCore.Functions.GetPlayerData()
                            local job = PlayerData.job
                            local jobName = job.name
                            local onDuty = job.onduty
                            return jobName == "realtor" and onDuty
                        end,
                    },
                    {
                        label = "Ring Doorbell",
                        action = enter,
                        canInteract = function()
                            local property = Property.Get(property_id)
                            return not property.has_access and not property.owner
                        end,
                    },
                    {
                        label = "Raid Property",
                        action = raid,
                        canInteract = function()
                            local PlayerData = QBCore.Functions.GetPlayerData()
                            local job = PlayerData.job
                            local jobName = job.name
                            local gradeAllowed = tonumber(job.grade.level) >= Config.MinGradeToRaid
                            local onDuty = job.onduty

                            return Config.PoliceJobNames[jobName] and gradeAllowed and onDuty
                        end,
                    },
                },
            }
        )

        return targetName
    end,
    AddApartmentEntrance = function(coords, size, heading, apartment, enter, seeAll, seeAllToRaid, targetName)
        exports['qb-target']:AddBoxZone(targetName, vector3(coords.x, coords.y, coords.z), size.x, size.y, {
            name = targetName,
            heading = heading,
            debugPoly = Config.DebugMode,
            minZ = coords.z - 1.0,
            maxZ = coords.z + 2.0,
        }, {
            options = {
                {
                    label = "Enter Apartment",
                    action = enter,
                    canInteract = function()
                        local apartments = ApartmentsTable[apartment].apartments
                        return hasApartment(apartments)
                    end,
                },
                {
                    label = "See all apartments",
                    action = seeAll,
                },
                {
                    label = "Raid Apartment",
                    action = seeAllToRaid,
                    canInteract = function()
                        local PlayerData = QBCore.Functions.GetPlayerData()
                        local job = PlayerData.job
                        local jobName = job.name
                        local gradeAllowed = tonumber(job.grade.level) >= Config.MinGradeToRaid
                        local onDuty = job.onduty

                        return Config.PoliceJobNames[jobName] and gradeAllowed and onDuty
                    end,
                },
            }
        })
    end,
    AddDoorZoneInside = function(coords, size, heading, leave, checkDoor)
        exports["qb-target"]:AddBoxZone(
            "shellExit",
            vector3(coords.x, coords.y, coords.z),
            size.x,
            size.y,
            {
                name = "shellExit",
                heading = heading,
                debugPoly = Config.DebugMode,
                minZ = coords.z - 2.0,
                maxZ = coords.z + 1.0,
            },
            {
                options = {
                    {
                        label = "Leave Property",
                        action = leave,
                    },
                    {
                        label = "Check Door",
                        action = checkDoor,
                    },
                },
            }
        )

        return "shellExit"
    end,
    RemoveTargetZone = function(targetName)
        exports["qb-target"]:RemoveZone(targetName)
    end,
    AddRadialOption = function(id, label, icon, _, event, options)
        exports['qb-radialmenu']:AddOption({
            id = id,
            title = label,
            icon = icon,
            type = 'client',
            event = event,
            shouldClose = true,
            options = options
        }, id)
    end,
    RemoveRadialOption = function(id)
        exports['qb-radialmenu']:RemoveOption(id)
    end,
    AddTargetEntity = function(entity, label, action)
        exports["qb-target"]:AddTargetEntity(entity, {
            options = {
                {
                    label = label,
                    action = action,
                },
            },
        })
    end,
    RemoveTargetEntity = function(entity)
        exports["qb-target"]:RemoveTargetEntity(entity)
    end,
}

Framework.ox = {
    Notify = function(message, type)
        type = type == "inform" and "info" or type

        lib.notify({
            title = 'Property',
            description = message,
            type = type
        })
    end,
    AddEntrance = function(coords, size, heading, propertyId, enter, raid, showcase, showData, _)
        local property_id = propertyId

        local handler = exports.ox_target:addBoxZone({
            coords = vector3(coords.x, coords.y, coords.z),
            size = vector3(size.y, size.x, size.z),
            rotation = heading,
            debug = Config.DebugMode,
            options = {
                {
                    label = "Enter Property",
                    onSelect = enter,
                    canInteract = function()
                        local property = Property.Get(property_id)
                        return property.has_access or property.owner
                    end,
                },
                {
                    label = "Showcase Property",
                    onSelect = showcase,
                    canInteract = function()
                        -- local property = Property.Get(property_id)
                        -- if property.propertyData.owner ~= nil then return false end -- if its owned, it cannot be showcased

                        local PlayerData = QBCore.Functions.GetPlayerData()
                        local job = PlayerData.job
                        local jobName = job.name

                        return jobName == "realtor"
                    end,
                },
                {
                    label = "Property Info",
                    onSelect = showData,
                    canInteract = function()
                        local PlayerData = QBCore.Functions.GetPlayerData()
                        local job = PlayerData.job
                        local jobName = job.name
                        local onDuty = job.onduty
                        return jobName == "realtor" and onDuty
                    end,
                },
                {
                    label = "Ring Doorbell",
                    onSelect = enter,
                    canInteract = function()
                        local property = Property.Get(property_id)
                        return not property.has_access and not property.owner
                    end,
                },
                {
                    label = "Raid Property",
                    onSelect = raid,
                    canInteract = function()
                        local PlayerData = QBCore.Functions.GetPlayerData()
                        local job = PlayerData.job
                        local jobName = job.name
                        local gradeAllowed = tonumber(job.grade.level) >= Config.MinGradeToRaid
                        local onDuty = job.onduty

                        return jobName == "police" and onDuty and gradeAllowed
                    end,
                },
            },
        })

        return handler
    end,
    AddApartmentEntrance = function(coords, size, heading, apartment, enter, seeAll, seeAllToRaid, _)
        local handler = exports.ox_target:addBoxZone({
            coords = vector3(coords.x, coords.y, coords.z),
            size = vector3(size.y, size.x, size.z),
            rotation = heading,
            debug = Config.DebugMode,
            options = {
                {
                    label = "Enter Apartment",
                    onSelect = enter,
                    canInteract = function()
                        local apartments = ApartmentsTable[apartment].apartments
                        return hasApartment(apartments)
                    end,
                },
                {
                    label = "See all apartments",
                    onSelect = seeAll,
                },
                {
                    label = "Raid Apartment",
                    onSelect = seeAllToRaid,
                    canInteract = function()
                        local PlayerData = QBCore.Functions.GetPlayerData()
                        local job = PlayerData.job
                        local jobName = job.name
                        local gradeAllowed = tonumber(job.grade.level) >= Config.MinGradeToRaid
                        local onDuty = job.onduty

                        return jobName == "police" and onDuty and gradeAllowed
                    end,
                },
            },
        })

        return handler
    end,
    AddDoorZoneInside = function(coords, size, heading, leave, checkDoor)
        local handler = exports.ox_target:addBoxZone({
            coords = vector3(coords.x, coords.y, coords.z), --z = 3.0
            size = vector3(size.y, size.x, size.z),
            rotation = heading,
            debug = Config.DebugMode,
            options = {
                {
                    name = "leave",
                    label = "Leave Property",
                    onSelect = leave,
                },
                {
                    name = "doorbell",
                    label = "Check Door",
                    onSelect = checkDoor,
                },
            },
        })

        return handler
    end,
    RemoveTargetZone = function(handler)
        exports.ox_target:removeZone(handler)
    end,
    AddRadialOption = function(id, label, icon, fn)
        lib.addRadialItem({
            id = id,
            icon = icon,
            label = label,
            onSelect = fn,
        })
    end,
    RemoveRadialOption = function(id)
        lib.removeRadialItem(id)
    end,
    AddTargetEntity = function(entity, label, action)
        exports.ox_target:addLocalEntity(entity, {
            {
                name = label,
                label = label,
                onSelect = action,
            },
        })
    end,
    RemoveTargetEntity = function(entity)
        exports.ox_target:removeLocalEntity(entity)
    end,
}
