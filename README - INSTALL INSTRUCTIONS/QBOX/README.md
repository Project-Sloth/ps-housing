# qbx_core Resource Edits
Search for `createCharacter` in client/character.lua and replace with

```lua
local function createCharacter(cid)
    previewPed()

    :: noMatch ::

    local dialog = characterDialog()

    if not dialog then return false end

    for input = 1, 3 do -- Run through first 3 inputs, aka first name, last name and nationality
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

Search for `spawnLastLocation` in client character and replace for: 

```lua
local function spawnLastLocation()
    DoScreenFadeOut(500)

    while not IsScreenFadedOut() do
        Wait(0)
    end

    destroyPreviewCam()

    pcall(function() exports.spawnmanager:spawnPlayer({
        x = QBX.PlayerData.position.x,
        y = QBX.PlayerData.position.y,
        z = QBX.PlayerData.position.z,
        heading = QBX.PlayerData.position.w
    }) end)

    local insideMeta = QBX.PlayerData.metadata.inside
    if insideMeta.property_id then
        TriggerServerEvent('ps-housing:server:enterProperty', tostring(insideMeta.property_id))
    end

    TriggerServerEvent('QBCore:Server:OnPlayerLoaded')
    TriggerEvent('QBCore:Client:OnPlayerLoaded')

    while not IsScreenFadedIn() do
        Wait(0)
    end
end
```
Edit in config/server.lua in `characterDataTables`:

`{'properties', 'owner'}` to `{'properties', 'owner_citizenid'}`


# qbx_spawn Resource Edits

Find `inputHandler` in client/main.lua and replace with: 

```lua
local function inputHandler()
    while DoesCamExist(previewCam) do
        if IsControlJustReleased(0, 188) then
            previousButtonId = currentButtonId
            currentButtonId -= 1

            if currentButtonId < 1 then
                currentButtonId = #spawns
            end

            updateScaleform()
        elseif IsControlJustReleased(0, 187) then
            previousButtonId = currentButtonId
            currentButtonId += 1

            if currentButtonId > #spawns then
                currentButtonId = 1
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

            local spawnData = spawns[currentButtonId]
            if spawnData.property_id then
                TriggerServerEvent('ps-housing:server:enterProperty', tostring(spawnData.property_id), 'spawn')
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
Find `qbx_spawn:server:getLastLocation` in server/main.lua and replace with: 

```lua
lib.callback.register('qbx_spawn:server:getLastLocation', function(source)
    local player = exports.qbx_core:GetPlayer(source)
    return json.decode(MySQL.single.await('SELECT position FROM players WHERE citizenid = ?', {player.PlayerData.citizenid}).position), player.PlayerData.metadata.inside and player.PlayerData.metadata.inside.propertyId
end)
```

Find `qbx_spawn:server:getProperties` in server/main.lua and replace with: 

```lua
lib.callback.register('qbx_spawn:server:getProperties', function(source)
    local player = exports.qbx_core:GetPlayer(source)
    local houseData = {}

    local houses = MySQL.query.await('SELECT * FROM properties WHERE owner_citizenid = ?', {player.PlayerData.citizenid})

    if not houses then return {} end

    for i = 1, #houses do
        local house = houses[i]
            if not house.apartment then
            local door = exports['ps-housing']:getMainDoor(house.property_id, 1, true)
            local coords = door.objCoords or door.coords or door.doors[1] and door.doors[1].coords or door.doors[1].objCoords
            houseData[#houseData + 1] = {
                label = house.street,
                coords = coords
            }
        end
    end

    return houseData
end)
```

# ox_doorlock 

Find `ox_doorlock:editDoorlock` in ox_doorlock/server/main.lua and add this code below under it

```lua
function GetNameFromDoor(name)
    local results = MySQL.query.await('SELECT * FROM ox_doorlock WHERE name LIKE ?', {'%' .. name .. '%'})
    if results and #results > 0 then
        return results
    end
    return nil
end

RegisterNetEvent('ox_doorlock:RemoveDoorlock', function(name)
	local doorData = GetNameFromDoor(name)

    if doorData and #doorData > 0 then
        for _, door in ipairs(doorData) do
			MySQL.update('DELETE FROM ox_doorlock WHERE id = ?', { door.id })
			TriggerClientEvent('ox_doorlock:editDoorlock', -1, door.id, nil)
        end
    else
        print('No doors found with the name:', name)
    end
end)
```

# qbx_properties Resource Ddits

Replace `fxmanifest.lua` with:

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

Add the below code block in `client/apartmentselect.lua`

```lua
AddEventHandler('ps-housing:setApartments', function(data)
    apartmentOptions = data
end)
```

Find `InputHandler` in apartmentselect.lua function and replace with: 

```lua
local function InputHandler()
    while true do
        if IsControlJustReleased(0, 188) then
            currentButtonId -= 1
            if currentButtonId < 1 then currentButtonId = #sharedConfig.apartmentOptions end
            SetupScaleform()
        elseif IsControlJustReleased(0, 187) then
            currentButtonId += 1
            if currentButtonId > #sharedConfig.apartmentOptions then currentButtonId = 1 end
            SetupScaleform()
        elseif IsControlJustReleased(0, 191) then
            local alert = lib.alertDialog({
                header = locale('alert.apartment_selection'),
                content = string.format(locale('alert.are_you_sure'), sharedConfig.apartmentOptions[currentButtonId].label),
                centered = true,
                cancel = true
            })
            if alert == 'confirm' then
                DoScreenFadeOut(500)
                while not IsScreenFadedOut() do Wait(0) end
                FreezeEntityPosition(cache.ped, false)
                SetEntityCoords(cache.ped, sharedConfig.apartmentOptions[currentButtonId].enter.x, sharedConfig.apartmentOptions[currentButtonId].enter.y, sharedConfig.apartmentOptions[currentButtonId].enter.z - 2.0, false, false, false, false)
                Wait(0)
                -- TriggerServerEvent('qbx_properties:server:apartmentSelect', currentButtonId)
                TriggerServerEvent("ps-housing:server:createNewApartment", sharedConfig.apartmentOptions[currentButtonId].label)
                Wait(1000) -- Wait for player to spawn correctly so clothing menu can load in nice
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

head to qbx_properties/config/shared.lua and replace this table with this
```lua
apartmentOptions = {
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

Since the `properties_decorations` table depends on the `properties` table, you'll keep encountering errors unless you follow these steps:

1. Drop both the `properties` and `properties_decorations` tables.
2. Run the SQL file located in `ps-housing/README-INSTALL INSTRUCTIONS/QBOX`.

# Dependencies
1. [ps-realtor](https://github.com/Project-Sloth/ps-realtor)
2. [fivem-freecam](https://github.com/Deltanic/fivem-freecam)
3. [ox_lib](https://github.com/overextended/ox_lib/releases)
4. [ox_target](https://github.com/overextended/ox_target)
5. [ox_doorlock](https://github.com/overextended/ox_doorlock)
