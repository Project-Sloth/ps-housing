
# QBX Core

## `client/character.lua`

### Step 1: Update `createCharacter`

Search for `createCharacter` in `client/character.lua` and replace it with the following code:

```lua
local function createCharacter(cid)
    previewPed()

    :: noMatch ::

    local dialog = characterDialog()

    if not dialog then return false end

    for input = 1, 3 do -- Run through first 3 inputs: first name, last name, and nationality
        if not checkStrings(dialog, input) then
            Notify(locale('error.no_match_character_registration'), 'error', 10000)
            goto noMatch
            break
        end
    end

    DoScreenFadeOut(150)
    lib.callback.await('qbx_core:server:createCharacter', false, {
        firstname = capString(dialog[1]),
        lastname = capString(dialog[2]),
        nationality = capString(dialog[3]),
        gender = dialog[4] == locale('info.char_male') and 0 or 1,
        birthdate = dialog[5],
        citizenid = cid
    })

    if GetResourceState('qbx_spawn') == 'missing' then
        spawnDefault()
    else
        if config.characters.startingApartment then
            TriggerEvent('apartments:client:setupSpawnUI')
        else
            TriggerEvent('qbx_core:client:spawnNoApartments')
        end
    end

    destroyPreviewCam()
    return true
end
```

### Step 2: Update `spawnLastLocation`

Search for `spawnLastLocation` and replace it with the following code:

```lua
local function spawnLastLocation()
    DoScreenFadeOut(500)

    while not IsScreenFadedOut() do
        Wait(0)
    end

    destroyPreviewCam()

    pcall(function()
        exports.spawnmanager:spawnPlayer({
            x = QBX.PlayerData.position.x,
            y = QBX.PlayerData.position.y,
            z = QBX.PlayerData.position.z,
            heading = QBX.PlayerData.position.w
        })
    end)

    local insideMeta = QBX.PlayerData.metadata.inside
    if insideMeta.propertyId then
        TriggerServerEvent('ps-housing:server:enterProperty', tostring(insideMeta.propertyId))
    end

    TriggerServerEvent('QBCore:Server:OnPlayerLoaded')
    TriggerEvent('QBCore:Client:OnPlayerLoaded')

    while not IsScreenFadedIn() do
        Wait(0)
    end
end
```

## `config/server.lua`

### Step 1: Update `characterDataTables`

Change `{'properties', 'owner'}` in `characterDataTables = {` to `{'properties', 'owner_citizenid'}`.

# QBX Spawn

## `client/main.lua`

### Step 1: Update `inputHandler`

Replace the `inputHandler` function with the following code:

```lua
local function inputHandler()
    while DoesCamExist(previewCam) do
        if IsControlJustReleased(0, 188) then
            previousButtonID = currentButtonID
            currentButtonID -= 1

            if currentButtonID < 1 then
                currentButtonID = #spawns
            end

            updateScaleform()
        elseif IsControlJustReleased(0, 187) then
            previousButtonID = currentButtonID
            currentButtonID += 1

            if currentButtonID > #spawns then
                currentButtonID = 1
            end

            updateScaleform()
        elseif IsControlJustReleased(0, 191) then
            DoScreenFadeOut(1000)

            while not IsScreenFadedOut() do
                Wait(0)
            end

            TriggerServerEvent('QBCore:Server:OnPlayerLoaded')
            TriggerEvent('QBCore:Client:OnPlayerLoaded')
            FreezeEntityPosition(cache.ped, false)

            local spawnData = spawns[currentButtonID]
            if spawnData.propertyId then
                TriggerServerEvent('ps-housing:server:enterProperty', tostring(spawnData.propertyId))
            else
                SetEntityCoords(cache.ped, spawnData.coords.x, spawnData.coords.y, spawnData.coords.z, false, false, false, false)
                SetEntityHeading(cache.ped, spawnData.coords.w or 0.0)
            end

            DoScreenFadeIn(1000)

            break
        end

        Wait(0)
    end

    stopCamera()
end
```

## `server/main.lua`

### Step 1: Update `qbx_spawn:server:getLastLocation`

Replace the callback for `qbx_spawn:server:getLastLocation` with the following code:

```lua
lib.callback.register('qbx_spawn:server:getLastLocation', function(source)
    local player = exports.qbx_core:GetPlayer(source)
    return json.decode(MySQL.single.await('SELECT position FROM players WHERE citizenid = ?', {player.PlayerData.citizenid}).position), player.PlayerData.metadata.inside and player.PlayerData.metadata.inside.propertyId
end)
```

### Step 2: Update `qbx_spawn:server:getHouses`

Replace the callback for `qbx_spawn:server:getHouses` with the following code:

```lua
lib.callback.register('qbx_spawn:server:getHouses', function(source)
    local player = exports.qbx_core:GetPlayer(source)
    local houseData = {}

    local houses = MySQL.query.await('SELECT * FROM properties WHERE owner_citizenid = ?', {player.PlayerData.citizenid})

    if not houses then return {} end

    for i = 1, #houses do
        local house = houses[i]
        if not house.apartment then
            local door = exports['ps-housing']:getMainDoor(house.property_id, 1, house.shell ~= 'mlo')
            if door then
                local coords = door.objCoords or door.coords or door.doors[1] and door.doors[1].coords or door.doors[1].objCoords
                houseData[#houseData + 1] = {
                    label = house.street,
                    coords = coords
                }
            end
        end
    end

    return houseData
end)
```

# QBX Properties

## `fxmanifest.lua`

### Step 1: Update Manifest

Replace the existing manifest with the following code:

```lua
fx_version 'cerulean'
game 'gta5'

version '0.0.1'
repository 'https://github.com/Qbox-project/qbx_properties'
description 'Hopefully one day a feature rich property system'

ox_lib 'locale'

shared_scripts {
    '@ox_lib/init.lua',
    '@qbx_core/modules/lib.lua',
    'config/shared.lua',
}

client_scripts {
    -- '@qbx_core/modules/playerdata.lua',
    -- 'config/client.lua',
    'client/apartmentselect.lua',
    -- 'client/property.lua',
    -- 'client/realtor.lua',
    -- 'client/dataview.lua',
    -- 'client/decorating.lua',
}

-- server_scripts {
--     '@oxmysql/lib/MySQL.lua',
--     'config/server.lua',
--     'server/apartmentselect.lua',
--     'server/property.lua',
--     'server/realtor.lua',
--     --'server/decorating.js' only used for taking screenshots of furniture
-- }

files {
    'locales/*.json',
    'screenshots/*.png'
}

lua54 'yes'
use_experimental_fxv2_oal 'true'
```

## `client/apartmentselect.lua`

### Step 1: Add Event Handler

Add the following code to the bottom of the file:

```lua
AddEventHandler('ps-housing:setApartments', function(data)
    ApartmentOptions = data
end)
```

### Step 2: Update `InputHandler`

Find `InputHandler` and replace it with the following function:

```lua
local function InputHandler()
    while true do
        if IsControlJustReleased(0, 188) then
            currentButtonID -= 1
            if currentButtonID < 1 then currentButtonID = #ApartmentOptions end
            SetupScaleform()
        elseif IsControlJustReleased(0, 187) then
            currentButtonID += 1
            if currentButtonID > #ApartmentOptions then currentButtonID = 1 end
            SetupScaleform()
        elseif IsControlJustReleased(0, 191) then
            local alert = lib.alertDialog({
                header = locale('alert.apartment_selection'),
                content = string.format(locale('alert.are_you_sure'), ApartmentOptions[currentButtonID].label),
                centered = true,
                cancel = true
            })
            if alert == 'confirm' then
                DoScreenFadeOut(500)
                while not IsScreenFadedOut() do Wait(0) end
                FreezeEntityPosition(cache.ped, false)
                SetEntityCoords(cache.ped, ApartmentOptions[currentButtonID].enter.x, ApartmentOptions[currentButtonID].enter.y, ApartmentOptions[currentButtonID].enter.z - 2.0, false, false, false, false)
                Wait(0)
                TriggerServerEvent("ps-housing:server:createNewApartment", ApartmentOptions[currentButtonID].id)
                Wait(1000) -- Wait for player to spawn correctly so clothing menu can load in nicely
                TriggerServerEvent('QBCore:Server:OnPlayerLoaded')
                TriggerEvent('QBCore:Client:OnPlayerLoaded')
                break
            end
        end
        Wait(0)
    end
    StopCamera()
end
```

## `qbx_properties/config/shared.lua`
### Step 1: Look For ApartmentOptions = { and replace with 
```lua
ApartmentOptions = {
    {
        interior = 'DellPerroHeightsApt4',
        label = 'Fantastic Plaza',
        description = 'Enjoy ocean views far away from tourists and bums on Del Perro Beach.',
        enter = vec3(-1447.35, -537.84, 34.74)
    },
    {
        interior = 'DellPerroHeightsApt7',
        label = 'Tinsel Towers',
        description = 'Luxury Del Perro Heights apartment complex! For all you voyeurs out there!',
        enter = vec3(-1447.35, -537.84, 34.74)
    },
    {
        interior = '4IntegrityWayApt30',
        label = 'Integrity Way',
        description = 'An apartment so expansive, all your friends will immediately know how much you paid for it.',
        enter = vec3(-47.52, -585.86, 37.95)
    },
    {
        interior = 'RichardMajesticApt2',
        label = 'Morningwood Blvd',
        description = 'This breathtaking luxury condo is a stone\'s throw from AKAN Records and a Sperm Donor Clinic.',
        enter = vec3(-936.15, -378.91, 38.96)
    },
    {
        interior = 'TinselTowersApt42',
        label = 'South Rockford Drive',
        description = 'A picture-perfect lateral living experience in one of Los Santos most sought-after tower blocks.',
        enter = vec3(-614.58, 46.52, 43.59)
    },
	{
        interior = 'TinselTowersApt42',
        label = 'Modern 1 Apartment',
        description = 'An Apartment with an open view!',
        enter = vec3(-614.58, 46.52, 43.59)
    },
}
 ```
# Running The SQL
## If You Have Previously Had qbx_properties You Will Need To Drop properties and properties_decorations, If You Are A New Server Ignore This Specific Line
### Step 1: Open Your Preferred Database Management System (PhpMyAdmin, HeidiSQL, etc.. )
### Step 2: Run The SQL

### If you get an error for foreign Key  Restraints You Didn't Drop The Tables

# Updating Your server.cfg

## Step 1: look for your ensure list it should look something like this 
```cfg
# Qbox & Extra stuff
ensure ox_lib
ensure qbx_core
ensure ox_target
ensure [ox]
ensure [qbx]
ensure [standalone]
ensure [voice]

```

Now Add This UNDER [ox]
```cfg
ensure ps-housing
ensure ps-realtor
ensure fivem-freecam
```

so it should look like 
```cfg
# Qbox & Extra stuff
ensure ox_lib
ensure qbx_core
ensure ox_target
ensure [ox]
ensure ps-housing
ensure ps-realtor
ensure fivem-freecam
ensure [qbx]
ensure [standalone]
ensure [voice]
```

# Dependencies
1. [ps-realtor](https://github.com/Project-Sloth/ps-realtor)
2. [fivem-freecam](https://github.com/Deltanic/fivem-freecam)
3. [ox_lib](https://github.com/overextended/ox_lib/releases)
4. [ox_target](https://github.com/overextended/ox_target)
