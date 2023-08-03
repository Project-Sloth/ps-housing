RegisterCommand("migratehouses", function()
    TriggerServerEvent('ps-housing:server:migratehouses')
end)


lib.callback.register('ps-housing:client:getclientdata', function(data)
    return {
        street = GetStreetNameFromHashKey(GetStreetNameAtCoord(data.coords.x, data.coords.y, data.coords.z)),
        region = GetLabelText(GetNameOfZone(data.coords.x, data.coords.y, data.coords.z))
    }
end)
