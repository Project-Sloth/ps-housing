# ps-housing

ps-housing is a resource that opens up a world of creative possibilities for housing. Its user-friendly interface lets you decorate any location to your heart's content. The best part? Not only is it completely free, but it's also reliable and functional, unlike many other housing systems available. Dive in and start transforming spaces with ps-housing today!

ps-housing owes its existence to the exceptional coding expertise of [Xirvin#0985](https://github.com/ImXirvin). His application of top-tier coding practices has been instrumental in creating this script. We at Project Sloth are thrilled that he has joined our team and utilized our platform to deliver this incredible, much-anticipated resource. Our sincere appreciation goes out to [Xirvin#0985](https://github.com/ImXirvin) for his outstanding contribution!

# Preview [ps-housing](https://github.com/Project-Sloth/ps-housing)
![image](https://github.com/Project-Sloth/ps-housing/assets/82112471/07b7f8c6-38ea-4f8c-95b6-9bd6bafbbd09)
![image](https://github.com/Project-Sloth/ps-housing/assets/82112471/163ae847-5a44-48cb-89f5-e0c1e7b59383)
![image](https://github.com/Project-Sloth/ps-housing/assets/82112471/655d9bb6-6c6d-4676-b4e0-f4368f3325a9)
![image](https://github.com/Project-Sloth/ps-housing/assets/82112471/fc632975-c2f6-41fb-89cd-a984679f1a41)

# Preview [ps-realtor](https://github.com/Project-Sloth/ps-realtor)
![image](https://github.com/Project-Sloth/ps-realtor/assets/82112471/24e4018a-cb97-42b0-81df-3b0236c7e2dc)
![image](https://github.com/Project-Sloth/ps-realtor/assets/82112471/4d8ece54-ace1-4ffc-b8fb-90274bc94e72)
![image](https://github.com/Project-Sloth/ps-realtor/assets/82112471/188d259c-4c0f-4c91-905c-bf9b826cc518)
![image](https://github.com/Project-Sloth/ps-realtor/assets/82112471/9e033984-45f2-449d-ba6c-bb8742ac08bd)
![image](https://github.com/Project-Sloth/ps-realtor/assets/82112471/0dd078b8-a941-4316-b9e1-26c696023139)

# Usage
- Players can decorate their houses and apartments with a full selection of furniture and decorations (included a wide variety of custom housing props)
- Provides support for housing and apartments and is a full replacement for qb-apartments and qb-housing
  - When a player first spawns after enabling ps-housing, they will have to choose an apartment. Once they spawn in the stashitems from their previous qb-apartment will be migrated to their new apartment stash.
- Allows players to purchase and list houses for sale through `ps-realtor` and the realtor job
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
Once inside the property, the player can furnish and decorate the property to their liking. They can also invite other players to their property, and give them access to the property. Open the furniture store by pressing `Z`. 

This will open a furniture store complete with all of the props. Select an item from the catalog and place it into the property. You can use the placement gizmo to position the item to your liking as well as use the UI tools for fine tune control over the placement. Once you are happy with the positioning, make sure you press `Add to Cart` before moving on. Continue to add as many items as you want to your cart. Once you are done, go to the `Checkout` and purchase the items. 

> Note: The place on ground button sometimes does not work properly depending on where the native detects the ground to be.

## Dynamic Doors

Dynamic Doors will turn placed doors into actual working doors, Instead of them being static. (See videos below)

### Preview

https://github.com/complexza/ps-housing/assets/74205343/72cfc135-2f78-42b3-a540-45f02567b6d7

https://github.com/complexza/ps-housing/assets/74205343/0ff26e7f-1341-45fc-8fc6-d65421dec0b2

### Setup
- You will need to set the `Config.DynamicDoors = true`
- You will have to add this convar into your server.cfg `setr game_enableDynamicDoorCreation "true"`

> Note: The convar has to be in your server.cfg in order for the doors to be dynamic!

### Shell Support
* [K4MB1](https://github.com/Project-Sloth/ps-housing/wiki/K4MB1-Shells-Support-&-Offsets)

# Important

* Players need to place their [stash](https://github.com/Project-Sloth/ps-housing/blob/7efd2009050b9a20969877cf69b284352a9309bf/shared/config.lua#LL426C96-L426C96) and [wardrobe](https://github.com/Project-Sloth/ps-housing/blob/7efd2009050b9a20969877cf69b284352a9309bf/shared/config.lua#L427) or else they wont have one. Check [Config](https://github.com/Project-Sloth/ps-housing/blob/7efd2009050b9a20969877cf69b284352a9309bf/shared/config.lua#L422) for more information.

* This entire README is meant for compatibility with default QBCore scripts. If you have different scripts, you'll need to adjust them for compatibility yourself. Refrain from asking us how to circumvent paid scripts that can't be adjusted for ps-housing support. Instead, request their support for ps-housing - this script is fully open source for that reason. Any inquiries related to this be ignored. 

# Installation
## Kamaryn has created an amazing setup video located [here.](https://www.youtube.com/watch?v=6YKkl20BevE)

## PAY ATTENTION TO EACH STEP. DO NOT SKIP ANY. 

### 1. Find the following events in `qb-multicharacter` and change in server/main.lua event to: 

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
### 2. Find the following events in `qb-spawn` and change in client/client.lua event to: 

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
        TriggerServerEvent('ps-housing:server:enterProperty', tostring(property_id))
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

### 3. Find the following events in `qb-garages` and change: 
`qb-garages > server > main.lua > around line 120` on event `qb-garage:server:checkOwnership`

Replace 
```lua
local hasHouseKey = exports['qb-houses']:hasKey(result[1].license, result[1].citizenid, house)
```
With
```lua
local hasHouseKey = exports['ps-housing']:IsOwner(src, house)
```

`qb-garages > client > main.lua > around line 451` add under event `qb-garages:client:addHouseGarage`
```lua
RegisterNetEvent('qb-garages:client:removeHouseGarage', function(house)
    Config.HouseGarages[house] = nil
end)
```

### For qb-garages v2: 
`qb-garages > server > main.lua > around line 118` on event `qb-garages:server:canDeposit`

Replace 
```lua
if type == 'house' and not exports['qb-houses']:hasKey(Player.PlayerData.license, Player.PlayerData.citizenid, Config.HouseGarages[garage].label) then
```
With
```lua
if type == 'house' and not exports['ps-housing']:IsOwner(source, garage) then
```

`qb-garages > client > main.lua > around line 392` add under event `qb-garages:client:addHouseGarage`
```lua
RegisterNetEvent('qb-garages:client:removeHouseGarage', function(house)
    Config.Garages[house] = nil
end)
```

### 4. Run the `properties.sql` file, but be cautious. If a table named `properties` already exists in your database, this operation will drop it, resulting in the loss of all its data.

### 5. Delete default [qb-apartments](https://github.com/qbcore-framework/qb-apartments)

### 6. Delete default [qb-houses](https://github.com/qbcore-framework/qb-houses)

### 7. Delete `qb-apartments/config.lua` references in `qb-spawn`, `qb-multicharacter` and `qb-phone` fxmanifest.lua (and any other scripts that may reference it).

### 8. Ensure ps-realtor above ps-housing.

### 9. In your server.cfg, add `ensure ox_lib` above all other resources

### 10. Install the dependencies below.

# Dependencies
1. [ps-realtor](https://github.com/Project-Sloth/ps-realtor)
2. [fivem-freecam](https://github.com/Deltanic/fivem-freecam)
3. [ox_lib](https://github.com/overextended/ox_lib/releases) - Use the latest release. If you do not use the latest release, MAKE SURE TO BUILD THE UI. Find their docs [here](https://overextended.dev/ox_lib#building-the-ui) on how to build the UI.
4. [ox_target](https://github.com/overextended/ox_target) or [qb-target](https://github.com/qbcore-framework/qb-target) - Change in [Config](https://github.com/Project-Sloth/ps-housing/blob/3c0f197b6d639f13235598393c84aac8d23d5f7a/shared/config.lua#L8), default is qb-target.

## For reference your server.cfg should be ensured like below:
* We highly recommend making a folder named [ps-housing] and add `ps-realtor`, `fivem-freecam`, `ox_lib`, `ps-core`, `ps-housing` inside the folder.
  
```
ensure ox_lib
ensure ps-housing
ensure ps-realtor
ensure fivem-freecam
```
## End of Installation 

# Migrating houses and apartments from qb-houses and qb-apartments

1. From a client run the `migratehouses` command to automatically convert all houses from qb-houses. It will print a message to the console once complete.
   **The `migratehouses` command MUST be run from a client in order to retrieve street and region data for each house**

2. From a client or server console run the `migrateapartments` command to automatically convert all apartments from qb-apartments. It will print a message to the console once complete.

## Resolving the "Foreign key constraint is incorrectly formed" Issue

If you come across an error such as `Foreign key constraint is incorrectly formed` while importing the `properties.sql` into your database, follow these steps to fix it.

1. Open your database in HeidiSQL.
2. Right-click on your database name and select "Edit."
3. Locate the database collation setting take a note of it. 
4. You will need to format the `properties.sql` file to match your database collation.
5. Ensure that the collation of your `citizenid` column in your `players` table is `utf8mb4_general_ci` and not `utf8mb4_unicode_ci`

If your database collation is set to `utf8mb4_general_ci`, modify the last line of the `properties.sql` file using VSCode or in HeidiSQL's query tab to the following:

```sql
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
```
This adjustment ensures that `properties.sql` file's character set and collation match that of your database, effectively resolving the issue.

## Item Limits System

1. Choose an item you want to limit under `Config.Furniture` in under `shared/config.lua`
2. Add `["max"] = 3` or the number of your choice to the item (see example below)
```lua
{ ["object"] = "v_res_r_figcat", ["price"] = 300, ["max"] = 2, ["label"] = "Fig Cat" },
```

## Logs System Setup

1. Go to `qb-smallresources/server/logs.lua` and add this:
```lua
    ['pshousing'] = 'yourdiscordwebhookhere',
```
2. Create a webhook for the channel you want the logs to show up in.
3. Replace the placeholder with your webhook link.

> This system only supports qb-core for now.

## Adding New Shells
* Follow the [ps-housing wiki](https://github.com/Project-Sloth/ps-housing/wiki) information.

# Notes
- If a player is in their apartment/house and an admin does a "Bring to me" function, they will not see the player nor will the player see anyone else. This is because the player is still in their own unique routing bucket. **Workaround**: To fix this, the player must go back into their apartment and leave on their own. 
    - Likewise, if an admin tries to "Go to" or "Spectate" a player that is in their apartment/house, the admin will not be able to see the apartment or player because it is in a different routing bucket.
# Credits
* [Xirvin](https://github.com/ImXirvin)
* [BackSH00TER](https://github.com/backsh00ter)
* [Byte Labs Project](https://github.com/Byte-Labs-Project)
* [Project Sloth Team](https://discord.gg/projectsloth)
* [K4MB1](https://www.k4mb1maps.com/)
* [Candrex](https://github.com/CandrexDev)
