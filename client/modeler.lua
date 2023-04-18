local Freecam = exports['fivem-freecam']
Freecam:SetKeyboardSetting('BASE_MOVE_MULTIPLIER', 0.1)
Freecam:SetKeyboardSetting('FAST_MOVE_MULTIPLIER', 2)
Freecam:SetKeyboardSetting('SLOW_MOVE_MULTIPLIER', 2)

local function RequestSpawnObject(object)
    local hash = GetHashKey(object)
    RequestModel(hash)
    while not HasModelLoaded(hash) do 
        Wait(0)
    end
end

local function CamThread()
    CreateThread(function()
        while Modeler.IsFreecamMode do
            if IsDisabledControlJustPressed(0, 26) then -- C
                Modeler.IsFreecamMode = false
                Modeler:FreecamMode(false)
                break
            end
            DisableControlAction(0, 199, true)
            DisableControlAction(0, 200, true)
            Wait(0)
        end
    end)
end


AddEventHandler('freecam:onTick', function()
    if not Modeler.IsFreecamMode then return end
    Modeler.CurrentCameraLookAt =  Freecam:GetTarget(5.0)
    Modeler.CurrentCameraPosition = Freecam:GetPosition()
    SendNUIMessage({
        action = "updateCamera",
        data = {
            cameraPosition = Modeler.CurrentCameraPosition,
            cameraLookAt = Modeler.CurrentCameraLookAt,
        }
    })
  end)


-- WHERE THE ACTUAL CLASS STARTS

Modeler = {

    IsMenuActive = false,
    IsFreecamMode = false,

    CurrentObject = nil,
    CurrentCameraPosition = nil,
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
        self.CurrentCameraPosition = nil
        self.CurrentCameraLookAt = nil
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
            CamThread()
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
        SetEntityDrawOutline(curObject, true)
        SetEntityDrawOutlineColor(255, 255, 255, 255)
        SetEntityDrawOutlineShader(0)
        SendNUIMessage({
            action = "setObjectAlpha",
            data = self.CurrentObjectAlpha
        })
        self.CurrentCameraLookAt = Freecam:GetTarget(5.0)
        self.CurrentCameraPosition = Freecam:GetPosition()
        SetEntityCoords(curObject, self.CurrentCameraLookAt.x, self.CurrentCameraLookAt.y, self.CurrentCameraLookAt.z)
        local x , y , z, w = GetEntityQuaternion(curObject)
        local objectRotation = GetEntityRotation(curObject)
        SendNUIMessage({ 
            action = "setupModel",
            data = {
                objectPosition = self.CurrentCameraLookAt,
                objectQuaternion = { x = x, y = y, z = z, w = w},
                objectRotation = objectRotation,
                cameraPosition = self.CurrentCameraPosition,
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
        SetEntityDrawOutline(self.CurrentObject, true)
        DeleteEntity(self.CurrentObject)
        self.CurrentObject = nil
    end,

    SetObjectAlpha = function (self, data)
        self.CurrentObjectAlpha = data.alpha
        SetEntityAlpha(self.CurrentObject, self.CurrentObjectAlpha, false)
    end,

    PlaceOnGround = function (self)
        local x, y, z = table.unpack(GetEntityCoords(self.CurrentObject))
        local ground, z = GetGroundZFor_3dCoord(x, y, z, 0)
        SetEntityCoords(self.CurrentObject, x, y, z)

        return {x = x, y = y, z = z}
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

RegisterNUICallback("placeOnGround", function(data, cb)
    local coords = Modeler:PlaceOnGround()
    cb(coords)
end)