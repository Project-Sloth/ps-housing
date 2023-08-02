RegisterCommand("migratehouses", function()
    TriggerServerEvent('migratehouses')
end)


lib.callback.register('getclientdata', function(data)
    return {
        street = GetStreetNameFromHashKey(GetStreetNameAtCoord(data.coords.x, data.coords.y, data.coords.z)),
        region = GetLabelText(GetNameOfZone(data.coords.x, data.coords.y, data.coords.z))
    }
end)
