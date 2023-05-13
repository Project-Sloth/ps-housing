# ps-housing

Test Commit


Need to add this at the end of client/main.lua in qb-multicharacter
```lua
RegisterNetEvent("qb-multicharacter:client:destroyCam", function ()
    SetCamActive(cam, false)
    DestroyCam(cam, true)
    RenderScriptCams(false, false, 1, true, true)
end)
```

Need to also change `qb-multicharacter:server:createCharacter` in server/main.lua event to: 
```lua
RegisterNetEvent('qb-multicharacter:server:createCharacter', function(data)
    local src = source
    local newData = {}
    newData.cid = data.cid
    newData.charinfo = data
    if QBCore.Player.Login(src, false, newData) then
        repeat
            Wait(10)
        until hasDonePreloading[src]
            local randbucket = (GetPlayerPed(src) .. math.random(1,999))
            SetPlayerRoutingBucket(src, randbucket)
            print('^2[qb-core]^7 '..GetPlayerName(src)..' has succesfully loaded!')
            QBCore.Commands.Refresh(src)
            loadHouseData(src)
            TriggerClientEvent("qb-multicharacter:client:closeNUI", src)
            TriggerClientEvent('apartments:client:setupSpawnUI', src, newData)
            TriggerEvent("ps-housing:server:createNewApartment", src)
            TriggerClientEvent("qb-multicharacter:client:destroyCam", src)
            GiveStarterItems(src)
    end
end)
```