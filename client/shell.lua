Shells = {} 


Shell = {
    entity = nil,
    hash = nil,
    position = nil,
    rotation = nil,
    shellData = nil,
    oldCoord = nil,

    exitTarget = nil,
}
Shell.__index = Shell


function Shell:SpawnShell(shellHash, position, rotation)
    lib.requestModel(shellHash)

    local entity = CreateObjectNoOffset(shellHash, position.x, position.y, position.z, false, false, false)
    FreezeEntityPosition(entity, true)

    SetEntityRotation(entity, rotation, 2, true)

    SetModelAsNoLongerNeeded(shellHash)

    return entity
end

function Shell:DespawnShell()
    if DoesEntityExist(self.entity) then
        DeleteEntity(self.entity)
    end

    if self.exitTarget then
        Framework[Config.Target].RemoveTargetZone(self.exitTarget)
    end
    self = nil
end


function Shell:CreatePropertyShell(shellName, position, rotation)
    local self = setmetatable({}, Shell)

    self.shellData = Config.Shells[shellName]
    self.hash = self.shellData.hash
    self.position = position
    self.rotation = rotation or vector3(0.0, 0.0, 0.0)

    self.entity = self:SpawnShell(self.hash, self.position, self.rotation)

    
    return self
end


-- example of how to use
-- exports["ps-housing"]:CreateTempShell("Modern Hotel", GetEntityCoords(PlayerPedId()), GetEntityRotation(PlayerPedId()), function()
--     Framework[Config.Notify].Notify("You left the shell", "error")
--     local coords = GetEntityCoords(PlayerPedId())
--     SetEntityCoordsNoOffset(PlayerPedId(), coords.x, coords.y, coords.z + 50.0, false, false, true)
-- end)
-- this is used as a constructor for third party scripts
function Shell:CreateTempShell(shellName, position, rotation, leaveCb)
    local self = setmetatable({}, Shell)
    self.shellData = Config.Shells[shellName]
    self.hash = self.shellData.hash
    self.position = position
    self.rotation = rotation
    

    DoScreenFadeOut(250)
    Wait(250)

    self.oldCoord = GetEntityCoords(PlayerPedId())

    self.entity = self:SpawnShell(self.hash, self.position, self.rotation)


    local doorOffset = self.shellData.doorOffset
    local offset = GetOffsetFromEntityInWorldCoords(self.entity, doorOffset.x, doorOffset.y, doorOffset.z)

    SetEntityCoordsNoOffset(cache.ped, offset.x, offset.y, offset.z, false, false, true)
    SetEntityHeading(cache.ped, self.shellData.doorOffset.h)

    local coords = offset
    local size = vector3(1.0, self.shellData.doorOffset.width, 3.0)
    local heading = self.shellData.doorOffset.h

    local function leave()
        DoScreenFadeOut(250)
        Wait(250)

        SetEntityCoordsNoOffset(PlayerPedId(), self.oldCoord.x, self.oldCoord.y, self.oldCoord.z, false, false, true)

        if leaveCb then
            leaveCb()
        end
        
        self:DespawnShell()

        Wait(250)
        DoScreenFadeIn(250)
    end


    self.exitTarget = Framework[Config.Target].AddDoorZoneInsideTempShell(coords, size, heading, leave)

    Wait(250)
    DoScreenFadeIn(250)

    Shells[self.entity] = self

    return self.entity
end

exports('CreateTempShell', function(shellName, position, rotation, leaveCb)
    return Shell:CreateTempShell(shellName, position, rotation, leaveCb)
end)

exports("GetShellData", function (shellName)
    return Config.Shells[shellName]
end)

exports("DespawnTempShell", function (shellEntity)
    if Shells[shellEntity] then
        Shells[shellEntity]:DespawnShell()
    end
end)
