local Freecam = exports['fivem-freecam']

local function RequestSpawnObject(object)
    local hash = GetHashKey(object)
    RequestModel(hash)
    while not HasModelLoaded(hash) do 
        Wait(0)
    end
  end

local function RotationToDirection(rotation)
	local adjustedRotation =
	{
		x = (math.pi / 180) * rotation.x,
		y = (math.pi / 180) * rotation.y,
		z = (math.pi / 180) * rotation.z
	}
	local direction =
	{
		x = -math.sin(adjustedRotation.z) * math.abs(math.cos(adjustedRotation.x)),
		y = math.cos(adjustedRotation.z) * math.abs(math.cos(adjustedRotation.x)),
		z = math.sin(adjustedRotation.x)
	}
	return direction
end


local function RayCastGamePlayCamera(distance)
    local cameraRotation = GetGameplayCamRot()
    local cameraCoord = GetGameplayCamCoord()
    CurrentCamera = cameraCoord
    local direction = RotationToDirection(cameraRotation)
    local destination =
    {
      x = cameraCoord.x + direction.x * distance,
      y = cameraCoord.y + direction.y * distance,
      z = cameraCoord.z + direction.z * distance
    }
    local a, b, c, d, e = GetShapeTestResult(StartShapeTestSweptSphere(cameraCoord.x, cameraCoord.y, cameraCoord.z, destination.x, destination.y, destination.z, 0.2, 339, PlayerPedId(), 4))
    return b, c, e
end
  

local function KeyThread()
    CreateThread(function()
        print("KeyThread Started")
        while Modeler.IsFreecamMode do
            if IsDisabledControlJustPressed(0, 26) then -- C
                Modeler.IsFreecamMode = false
                Modeler:FreecamMode(false)
                print("FreeCam Frozen")
                break
            end
            Wait(0)
        end
        print("KeyThread Ended")
    end)
end

-- WHERE THE ACTUAL CLASS STARTS

Modeler = {


    IsMenuActive = false,
    IsFreecamMode = false,

    CurrentObject = nil,
    CurrentCamera = nil,
    CurrentCameraLookAt = nil,
    CurrentObjectAlpha = 200,

    OpenMenu = function(self)
        self.IsMenuActive = true
        SendNUIMessage({
            action = "setVisible",
            data = true
        })
        SendNUIMessage({
            action = "setFurnituresData",
            data = Furnitures
        })
        SetNuiFocus(true, true)
        self:FreecamActive(true)
        self:FreecamMode(false)
    end,

    CloseMenu = function(self)
        self.IsMenuActive = false
        SendNUIMessage({
            action = "setVisible",
            data = false
        })
        SetNuiFocus(false, false)
        self:CancelPlacement()
        self:FreecamActive(false)
    end,

    FreecamActive = function(self, bool)
        if bool then
            Freecam:SetActive(true)
        else
            Freecam:SetActive(false)
            self.IsFreecamMode = false
        end
    end,

    FreecamMode = function(self, bool)
        if bool then --not in UI
            self.IsFreecamMode = true
            KeyThread()
            Freecam:SetFrozen(false)
            SetNuiFocus(false, false)
        else -- in UI
            self.IsFreecamMode = false
            Freecam:SetFrozen(true)
            SetNuiFocus(true, true)
            SendNUIMessage({
                action = "freecamMode",
                data = false
            })
        end
    end,


    StartPlacement = function(self, data)
        if self.CurrentObject ~= nil then
            self:CancelPlacement()
        end

        local object = data.object
        RequestSpawnObject(object)
        local curObject = CreateObject(GetHashKey(object), 0.0, 0.0, 0.0, true, true, false)
        FreezeEntityPosition(curObject, true)
        SetEntityCollision(curObject, false, false)
        SetEntityAlpha(curObject, self.CurrentObjectAlpha, false)
        SendNUIMessage({
            action = "setObjectAlpha",
            data = self.CurrentObjectAlpha
        })

        self.CurrentCamera = GetGameplayCamCoord()
        local _, rayCastCoords, _ = RayCastGamePlayCamera(100.0, self.CurrentCamera)
        self.CurrentCameraLookAt = rayCastCoords
        SetEntityCoords(curObject, rayCastCoords.x, rayCastCoords.y, rayCastCoords.z)
    
        local x , y , z, w = GetEntityQuaternion(curObject)
        local objectRotation = GetEntityRotation(curObject)
        SendNUIMessage({ 
            action = "setupModel",
            data = {
                objectPosition = rayCastCoords,
                objectQuaternion = { x = x, y = y, z = z, w = w},
                objectRotation = objectRotation,
                cameraPosition = self.CurrentCamera,
                cameraLookAt = self.CurrentCameraLookAt,
            }
        })
        SetNuiFocus(true, true)
        self.CurrentObject = curObject
    end,


    MoveObject = function (self, data)
        SetEntityCoords(self.CurrentObject, data.x + 0.0, data.y + 0.0, data.z + 0.0)
    end,

    RotateObject = function (self, data)
        SetEntityRotation(self.CurrentObject, data.x + 0.0, data.y + 0.0, data.z + 0.0)
    end,

    CancelPlacement = function (self)
        DeleteEntity(self.CurrentObject)
        self.CurrentObject = nil
        self.CurrentCamera = nil
        self.CurrentCameraLookAt = nil
        SetNuiFocus(false, false)
    end,

    SetObjectAlpha = function (self, data)
        self.CurrentObjectAlpha = data.alpha
        SetEntityAlpha(self.CurrentObject, self.CurrentObjectAlpha, false)
    end,

}

RegisterNUICallback("moveObject", function(data, cb)
    Modeler:MoveObject(data)
    cb("ok")
end)

RegisterNUICallback("rotateObject", function(data, cb)
    Modeler:RotateObject(data)
    cb("ok")
end)

RegisterNUICallback("cancelPlacement", function(data, cb)
    Modeler:CancelPlacement()
    cb("ok")
end)

RegisterNUICallback("setObjectAlpha", function(data, cb)
    Modeler:SetObjectAlpha(data)
    cb("ok")
end)

RegisterNUICallback("hideUI", function(data, cb)
    Modeler:CloseMenu()
	cb("ok")
end)

RegisterNUICallback("freecamMode", function(data, cb)
    Modeler:FreecamMode(data)
    cb("ok")
end)