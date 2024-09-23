### 1. Find the following events in `qb-multicharacter` and change them as below:

`qb-multicharacter > server > main.lua > loadUserData`
```lua
RegisterNetEvent('qb-multicharacter:server:loadUserData', function(cData)
    local src = source
    if QBCore.Player.Login(src, cData.citizenid) then
        local Player = QBCore.Functions.GetPlayer(src)
        local Name = Player.PlayerData.charinfo.firstname .. " " .. Player.PlayerData.charinfo.lastname
        repeat
            Wait(10)
        until hasDonePreloading[src]
        print('[' .. GetPlayerName(src) .. '] - ^2' .. Name .. '^7 (Citizen ID: ' .. cData.citizenid .. ') has succesfully loaded!')
        QBCore.Commands.Refresh(src)
        if Config.SkipSelection then
            local coords = json.decode(cData.position)
            TriggerClientEvent('qb-multicharacter:client:spawnLastLocation', src, coords, cData)
        else
            TriggerClientEvent('ps-housing:client:setupSpawnUI', src, cData)
        end
        TriggerEvent("qb-log:server:CreateLog", "joinleave", "Loaded", "green", "**" .. GetPlayerName(src) .. "** - " .. Name .. " (<@" .. (QBCore.Functions.GetIdentifier(src, 'discord'):gsub("discord:", "") or "unknown") .. "> | ||" .. (QBCore.Functions.GetIdentifier(src, 'ip') or 'undefined') .. "|| | " .. (QBCore.Functions.GetIdentifier(src, 'license') or 'undefined') .. " | " .. cData.citizenid .. " | " .. src .. ") loaded..")
    end
end)
```

`qb-multicharacter > server > main.lua > createCharacter`
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

`qb-multicharacter > client > main.lua > spawnLastLocation`

```lua
RegisterNetEvent('qb-multicharacter:client:spawnLastLocation', function(coords, cData)
    local result = lib.callback.await('ps-housing:cb:GetOwnedApartment', source, cData.citizenid)
    if result then
        TriggerEvent("apartments:client:SetHomeBlip", result.type)
    end
    local ped = PlayerPedId()
    SetEntityCoords(ped, coords.x, coords.y, coords.z)
    SetEntityHeading(ped, coords.w)
    FreezeEntityPosition(ped, false)
    SetEntityVisible(ped, true)
    local PlayerData = QBCore.Functions.GetPlayerData()
    local insideMeta = PlayerData.metadata["inside"]
    DoScreenFadeOut(500)
    if insideMeta.propertyId then
        TriggerServerEvent('ps-housing:server:enterProperty', tostring(insideMeta.propertyId))
    else
        SetEntityCoords(ped, coords.x, coords.y, coords.z)
        SetEntityHeading(ped, coords.w)
        FreezeEntityPosition(ped, false)
        SetEntityVisible(ped, true)
    end
    TriggerServerEvent('QBCore:Server:OnPlayerLoaded')
    TriggerEvent('QBCore:Client:OnPlayerLoaded')
    Wait(2000)
    DoScreenFadeIn(250)
end)
```
Delete `qb-apartments/config.lua` references in `qb-multicharacter` fxmanifest.lua.

# 

### 2. Find the following events in `qb-spawn` and change them as below:

`qb-spawn > client.lua > setupSpawns`
```lua
RegisterNetEvent('qb-spawn:client:setupSpawns', function(cData, new, apps)
    if not new then
        QBCore.Functions.TriggerCallback('qb-spawn:server:getOwnedHouses', function(houses)
            local myHouses = {}
            if houses ~= nil then
                for i = 1, (#houses), 1 do
                    local house = houses[i]

                    myHouses[#myHouses+1] = {
                        house = house,
                        label = (house.apartment or house.street) .. " " .. house.property_id,
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

`qb-spawn > client.lua > line 134 > 'chooseAppa' NUI Callback`
```lua
RegisterNUICallback('chooseAppa', function(data, cb)
    local ped = PlayerPedId()
    local appaYeet = data.appType
    SetDisplay(false)
    DoScreenFadeOut(500)
    Wait(100)
    FreezeEntityPosition(ped, false)
    RenderScriptCams(false, true, 0, true, true)
    SetCamActive(cam, false)
    DestroyCam(cam, true)
    SetCamActive(cam2, false)
    DestroyCam(cam2, true)
    SetEntityVisible(ped, true)
    Wait(500)
    TriggerServerEvent('QBCore:Server:OnPlayerLoaded')
    TriggerEvent('QBCore:Client:OnPlayerLoaded')
    Wait(100)
    TriggerServerEvent("ps-housing:server:createNewApartment", appaYeet)
    cb('ok')
end)
```

`qb-spawn > client > client.lua > line 169 'spawnplayer' NUI Callback`
```lua
RegisterNUICallback('spawnplayer', function(data, cb)
    local location = tostring(data.spawnloc)
    local type = tostring(data.typeLoc)
    local ped = PlayerPedId()
    local PlayerData = QBCore.Functions.GetPlayerData()
    local insideMeta = PlayerData.metadata["inside"]
    if type == "current" then
        PreSpawnPlayer()
        QBCore.Functions.GetPlayerData(function(pd)
            ped = PlayerPedId()
            SetEntityCoords(ped, pd.position.x, pd.position.y, pd.position.z)
            SetEntityHeading(ped, pd.position.a)
            FreezeEntityPosition(ped, false)
        end)
        TriggerServerEvent('QBCore:Server:OnPlayerLoaded')
        TriggerEvent('QBCore:Client:OnPlayerLoaded')
        if insideMeta.property_id ~= nil then
            local property_id = insideMeta.property_id
            TriggerServerEvent('ps-housing:server:enterProperty', tostring(property_id))
        end
        PostSpawnPlayer()
    elseif type == "house" then
        PreSpawnPlayer()
        TriggerServerEvent('QBCore:Server:OnPlayerLoaded')
        TriggerEvent('QBCore:Client:OnPlayerLoaded')
        local property_id = data.spawnloc.property_id
        TriggerServerEvent('ps-housing:server:enterProperty', tostring(property_id), 'spawn')
        PostSpawnPlayer()
    elseif type == "normal" then
        local pos = QB.Spawns[location].coords
        PreSpawnPlayer()
        SetEntityCoords(ped, pos.x, pos.y, pos.z)
        TriggerServerEvent('QBCore:Server:OnPlayerLoaded')
        TriggerEvent('QBCore:Client:OnPlayerLoaded')
        TriggerServerEvent('ps-housing:server:resetMetaData')
        SetEntityCoords(ped, pos.x, pos.y, pos.z)
        SetEntityHeading(ped, pos.w)
        PostSpawnPlayer()
    end
    cb('ok')
end)
```

`qb-spawn > server.lua > getOwnedHouses`
```lua
QBCore.Functions.CreateCallback('qb-spawn:server:getOwnedHouses', function(_, cb, cid)
    if cid ~= nil then
        local houses = MySQL.query.await('SELECT * FROM properties WHERE owner_citizenid = ?', {cid})
        if houses[1] ~= nil then
            cb(houses)
        else
            cb({})
        end
    else
        cb({})
    end
end)
```
Delete `qb-apartments/config.lua` references in `qb-spawn` fxmanifest.lua.

# 

### 3. Find the following events in `qb-garages` and change: 
`qb-garages > server > main.lua > around line 120` on event `qb-garage:server:checkOwnership`

Find: 
```lua
local hasHouseKey = exports['qb-houses']:hasKey(result[1].license, result[1].citizenid, house)
```
And replace with:
```lua
local hasHouseKey = exports['ps-housing']:IsOwner(src, house)
```

`qb-garages > client > main.lua > around line 451` add under event `qb-garages:client:addHouseGarage`
```lua
RegisterNetEvent('qb-garages:client:removeHouseGarage', function(house)
    Config.HouseGarages[house] = nil
end)
```
Delete `qb-apartments/config.lua` references in `qb-garages` fxmanifest.lua.

# 

### For qb-garages 2.0 version: 
`qb-garages > server > main.lua > around line 118` on event `qb-garages:server:canDeposit`

Find:
```lua
if type == 'house' and not exports['qb-houses']:hasKey(Player.PlayerData.license, Player.PlayerData.citizenid, Config.HouseGarages[garage].label) then
```
And replace with: 
```lua
if type == 'house' and not exports['ps-housing']:IsOwner(source, garage) then
```

`qb-garages > client > main.lua > ` add under event `qb-garages:client:addHouseGarage`
```lua
RegisterNetEvent('qb-garages:client:removeHouseGarage', function(house)
    Config.Garages[house] = nil
end)
```
Delete `qb-apartments/config.lua` references in `qb-garages` fxmanifest.lua.

#

### 4. Delete default [qb-apartments](https://github.com/qbcore-framework/qb-apartments)
### 5. Delete default [qb-houses](https://github.com/qbcore-framework/qb-houses)
### 6. Delete `qb-apartments/config.lua` references in `qb-phone` fxmanifest.lua (and any other scripts that may reference it).
### 7. Find your `qb-doorlock` script in your server and replace your `server > main.lua` file for the `main.lua` file located in QBCore\qb-doorlock\server\main.lua in this README.
### 8. Run the `properties.sql` file, but be cautious. If a table named `properties` already exists in your database, this operation will drop it, resulting in the loss of all its data.
### 9. Ensure ps-realtor above ps-housing.
### 10. Install the dependencies below.

# Dependencies
1. [ps-realtor](https://github.com/Project-Sloth/ps-realtor)
2. [fivem-freecam](https://github.com/Deltanic/fivem-freecam)
3. [ox_lib](https://github.com/overextended/ox_lib/releases)
4. [ox_target](https://github.com/overextended/ox_target) or [qb-target](https://github.com/qbcore-framework/qb-target)
