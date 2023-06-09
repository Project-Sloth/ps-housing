# ps-housing

ps-housing is a resource that opens up a world of creative possibilities for housing. Its user-friendly interface lets you decorate any location to your heart's content. The best part? Not only is it completely free, but it's also reliable and functional, unlike many other housing systems available. Dive in and start transforming spaces with ps-housing today!

ps-housing owes its existence to the exceptional coding expertise of [Xirvin#0985](https://github.com/ImXirvin). His application of top-tier coding practices has been instrumental in creating this script. We at Project Sloth are thrilled that he has joined our team and utilized our platform to deliver this incredible, much-anticipated resource. Our sincere appreciation goes out to [Xirvin#0985](https://github.com/ImXirvin) for his outstanding contribution!

# Preview

# Installation 
1. Insert the following event towards the end of qb-multicharacters > client > main.lua 

```lua
RegisterNetEvent("qb-multicharacter:client:destroyCam", function ()
    SetCamActive(cam, false)
    DestroyCam(cam, true)
    RenderScriptCams(false, false, 1, true, true)
end)
```

2. Find the following events in `qb-multicharacter` and change in server/main.lua event to: 

`qb-multicharacter > server > main.lua > line 90`
```lua
RegisterNetEvent('qb-multicharacter:server:loadUserData', function(cData)
    local src = source
    if QBCore.Player.Login(src, cData.citizenid) then
        repeat
            Wait(10)
        until hasDonePreloading[src]
        print('^2[qb-core]^7 '..GetPlayerName(src)..' (Citizen ID: '..cData.citizenid..') has succesfully loaded!')
        QBCore.Commands.Refresh(src)
        TriggerClientEvent('ps-housing:client:setupSpawnUI', src, cData)
        TriggerEvent("qb-log:server:CreateLog", "joinleave", "Loaded", "green", "**".. GetPlayerName(src) .. "** (<@"..(QBCore.Functions.GetIdentifier(src, 'discord'):gsub("discord:", "") or "unknown").."> |  ||"  ..(QBCore.Functions.GetIdentifier(src, 'ip') or 'undefined') ..  "|| | " ..(QBCore.Functions.GetIdentifier(src, 'license') or 'undefined') .." | " ..cData.citizenid.." | "..src..") loaded..")
    end
end)
```

`qb-multicharacter > server > main.lua > line 104`
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
        print('^2[qb-core]^7 '..GetPlayerName(src)..' has succesfully loaded!')
        QBCore.Commands.Refresh(src)
        TriggerClientEvent("qb-multicharacter:client:closeNUI", src)
        newData.citizenid = QBCore.Functions.GetPlayer(src).PlayerData.citizenid
        TriggerClientEvent('ps-housing:client:setupSpawnUI', src, newData)
        GiveStarterItems(src)
    end
end)
```
3. Find the following events in `qb-spawn` and change in server/main.lua event to: 

`qb-spawn > client > client.lua > line 51`
```lua
RegisterNetEvent('qb-spawn:client:setupSpawns', function(cData, new, apps)
    if not new then
        QBCore.Functions.TriggerCallback('qb-spawn:server:getOwnedHouses', function(houses)
            local myHouses = {}
            print(json.encode(houses, {indent = true}))
            if houses ~= nil then
                for i = 1, (#houses), 1 do
                    print(json.encode(houses[i], {indent = true}))
                    local house = houses[i]
                    myHouses[#myHouses+1] = {
                        house = house,
                        label = house.label,
                    }
                end
            end

            Wait(500)
            SendNUIMessage({
                action = "setupLocations",
                locations = QB.Spawns,
                houses = myHouses,
                isNew = new
            })
        end, cData.citizenid)
    elseif new then
        SendNUIMessage({
            action = "setupAppartements",
            locations = apps,
            isNew = new
        })
    end
end)
```

`qb-spawn > client > client.lua > line 134`
```lua
RegisterNUICallback('chooseAppa', function(data, cb)
    print("chooseAppa")
    local ped = PlayerPedId()
    local appaYeet = data.appType
    SetDisplay(false)
    DoScreenFadeOut(500)
    Wait(5000)
    print(appaYeet, json.encode(data))
    -- TriggerServerEvent("apartments:server:CreateApartment", appaYeet, Apartments.Locations[appaYeet].label)
    TriggerServerEvent("ps-housing:server:createNewApartment", appaYeet)
    TriggerServerEvent('QBCore:Server:OnPlayerLoaded')
    TriggerEvent('QBCore:Client:OnPlayerLoaded')
    FreezeEntityPosition(ped, false)
    RenderScriptCams(false, true, 500, true, true)
    SetCamActive(cam, false)
    DestroyCam(cam, true)
    SetCamActive(cam2, false)
    DestroyCam(cam2, true)
    SetEntityVisible(ped, true)
    cb('ok')
end)
```

4. Run the `properties.sql` file, but be cautious. If a table named `properties` already exists in your database, this operation will drop it, resulting in the loss of all its data.
5. Delete default [qb-apartments](https://github.com/qbcore-framework/qb-apartments)
6. Delete default [qb-houses](https://github.com/qbcore-framework/qb-houses)
7. Install the dependencies below.

# Dependancy
8. [bl-realtor](https://github.com/Byte-Labs-Project/bl-realtor)
9. [five-freecam](https://github.com/Deltanic/fivem-freecam)
10. [ox_lib](https://github.com/overextended/ox_lib) - Find their docs [here](https://overextended.github.io/docs/ox_lib) for assistance.

# To Do
- Optimise RAM Usage
    - Callback the stuff needed only when entering the property. (like furniture).

# Credits
* [Xirvin](https://github.com/ImXirvin)
* [Byte Labs Project](https://github.com/Byte-Labs-Project)
* [Project Sloth Team](https://discord.gg/projectsloth)
* [K4MB1](https://www.k4mb1maps.com/)
