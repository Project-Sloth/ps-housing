# ps-housing

ps-housing is a resource that opens up a world of creative possibilities for housing. Its user-friendly interface lets you decorate any location to your heart's content. The best part? Not only is it completely free, but it's also reliable and functional, unlike many other housing systems available. Dive in and start transforming spaces with ps-housing today!

ps-housing owes its existence to the exceptional coding expertise of [Xirvin#0985](https://github.com/ImXirvin). His application of top-tier coding practices has been instrumental in creating this script. We at Project Sloth are thrilled that he has joined our team and utilized our platform to deliver this incredible, much-anticipated resource. Our sincere appreciation goes out to [Xirvin#0985](https://github.com/ImXirvin) for his outstanding contribution!

# Preview

TODO: 

# Usage
- Players can decorate their houses and apartments with a full selection of furniture and decorations (included a wide variety of custom housing props)
- Provides support for housing and apartments and is a full replacement for qb-apartments and qb-housing
- Allows players to purchase and list houses for sale through `bl-realtor` and the realtor job
- Houses come with personal garages
- Houses and apartments come with personal wardrobes and stashes
- Players can share keys to their houses and apartments with other players
  
## Creating a new property for sale
Players must have the realtor job to create new properties. Additionally if the realtor has a high enough grade level, they can also help players move to new apartments.
All properties must be manually configured for sale by the realtor job, giving you full control over all aspects of properties, and bringing another avenue of roleplay to your server.

- Pick the location where you want to create a new property
- Use `/housing` to open the housing menu
- Click on create new property
- Fill out the details of the property (name, price, description, which shell to use, etc)
- Choose the door location (this is where the person will enter the house)
    - Ensure that you place it up against a wall, since players will use target to enter the house
- Choose the garage location 
    - This point is used both for storing vehicles, as well as the location where the vehicle will spawn when taken out of the garage
- Realtors can edit the details of the property by clicking on the property in the housing menu
- Players can see the properties for sale through the /housing menu as well

## Furnish and decorate a property
Once inside the property, the player can furnish and decorate the property to their liking. They can also invite other players to their property, and give them access to the property. Open the furnite store by pressing `Z`. 

This will open a furniture store complete with all of the props. Select an item from the catalog and place it into the property. You can use the placement gizmo to position the item to your liking as well as use the UI tools for fine tune control over the placement. Once you are happy with the positioning, make sure you press `Add to Cart` before moving on. Continue to add as many items as you want to your cart. Once you are done, go to the `Checkout` and purchase the items. 

> Note: The place on ground button sometimes does not work properly depending on where the native detects the ground to be.

# Important

Players need to place their [stash](https://github.com/Project-Sloth/ps-housing/blob/7efd2009050b9a20969877cf69b284352a9309bf/shared/config.lua#LL426C96-L426C96) and [wardrobe](https://github.com/Project-Sloth/ps-housing/blob/7efd2009050b9a20969877cf69b284352a9309bf/shared/config.lua#L427) or else they wont have one. Check [Config](https://github.com/Project-Sloth/ps-housing/blob/7efd2009050b9a20969877cf69b284352a9309bf/shared/config.lua#L422) for more information.

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

`qb-multicharacter > server > main.lua`
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

`qb-multicharacter > server > main.lua`
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
3. Find the following events in `qb-spawn` and change in client/client.lua event to: 

`qb-spawn > client.lua > line 51 > 'qb-spawn:client:setupSpawns' event`
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

`qb-spawn > client.lua > line 134 > 'chooseAppa' NUI Callback`
```lua
RegisterNUICallback('chooseAppa', function(data, cb)
    local ped = PlayerPedId()
    local appaYeet = data.appType
    SetDisplay(false)
    DoScreenFadeOut(500)
    Wait(5000)
    FreezeEntityPosition(ped, false)
    RenderScriptCams(false, true, 500, true, true)
    SetCamActive(cam, false)
    DestroyCam(cam, true)
    SetCamActive(cam2, false)
    DestroyCam(cam2, true)
    SetEntityVisible(ped, true)
    TriggerServerEvent('QBCore:Server:OnPlayerLoaded')
    TriggerEvent('QBCore:Client:OnPlayerLoaded')
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
        Wait(2000)
        if insideMeta.property_id ~= nil then
            local property_id = insideMeta.property_id
            TriggerServerEvent('ps-housing:server:enterProperty', tostring(property_id))
        end
        PostSpawnPlayer()
    elseif type == "house" then
        PreSpawnPlayer()

        TriggerServerEvent('QBCore:Server:OnPlayerLoaded')
        TriggerEvent('QBCore:Client:OnPlayerLoaded')

        Wait(2000)

        local property_id = data.spawnloc.property_id
        TriggerServerEvent('ps-housing:server:enterProperty', tostring(property_id))
        PostSpawnPlayer()
    elseif type == "normal" then
        local pos = QB.Spawns[location].coords
        PreSpawnPlayer()
        SetEntityCoords(ped, pos.x, pos.y, pos.z)
        TriggerServerEvent('QBCore:Server:OnPlayerLoaded')
        TriggerEvent('QBCore:Client:OnPlayerLoaded')
        TriggerServerEvent('ps-housing:server:resetMetaData')
        Wait(500)
        SetEntityCoords(ped, pos.x, pos.y, pos.z)
        SetEntityHeading(ped, pos.w)
        PostSpawnPlayer()
    end
    cb('ok')
end)
```

`qb-spawn > server.lua > line 3`
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

4. Find the following events in `qb-garages` and change: 
`qb-garages > server > main.lua > line 100` on event `qb-garage:server:checkOwnership`

Replace 
```lua
local hasHouseKey = exports['qb-houses']:hasKey(result[1].license, result[1].citizenid, house)
```
With
```lua
local hasHouseKey = exports['ps-housing']:IsOwner(src, house)
```

5. Run the `properties.sql` file, but be cautious. If a table named `properties` already exists in your database, this operation will drop it, resulting in the loss of all its data.
6. Delete default [qb-apartments](https://github.com/qbcore-framework/qb-apartments)
7. Delete default [qb-houses](https://github.com/qbcore-framework/qb-houses)
8. Delete `qb-apartments/config.lua` references in both `qb-spawn` and `qb-multicharacter` fxmanifest.lua (and any other scripts that may reference it).
9. Install the dependencies below.
10. In your server.cfg, add `ensure ox_lib` above all other resources
11. Ensure ps-housing above bl-realtor.

# Dependency
12. [bl-realtor](https://github.com/Byte-Labs-Project/bl-realtor)
13. [five-freecam](https://github.com/Deltanic/fivem-freecam)
14. [ox_lib](https://github.com/overextended/ox_lib) - Find their docs [here](https://overextended.github.io/docs/ox_lib) for assistance.
15. [ox_target](https://github.com/overextended/ox_target) or [qb-target](https://github.com/qbcore-framework/qb-target) - Change in [Config](https://github.com/Project-Sloth/ps-housing/blob/3c0f197b6d639f13235598393c84aac8d23d5f7a/shared/config.lua#L8), default is qb-target.
16. [ps-core]()

# To Do
- Optimise RAM Usage
    - Callback the stuff needed only when entering the property. (like furniture).

# Credits
* [Xirvin](https://github.com/ImXirvin)
* [Byte Labs Project](https://github.com/Byte-Labs-Project)
* [Project Sloth Team](https://discord.gg/projectsloth)
* [K4MB1](https://www.k4mb1maps.com/)
