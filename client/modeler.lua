local Freecam = exports['fivem-freecam']


local function RequestSpawnObject(object)
    local hash = GetHashKey(object)
    RequestModel(hash)
    while not HasModelLoaded(hash) do 
        Wait(0)
    end
end

local function CamThread()
    CreateThread(function()
        local IsDisabledControlJustPressed = IsDisabledControlJustPressed
        local DisableControlAction = DisableControlAction
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

    Cart = {},

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
            Freecam:SetKeyboardSetting('BASE_MOVE_MULTIPLIER', 0.1)
            Freecam:SetKeyboardSetting('FAST_MOVE_MULTIPLIER', 2)
            Freecam:SetKeyboardSetting('SLOW_MOVE_MULTIPLIER', 2)
        else
            Freecam:SetActive(false)
            --reset to default
            Freecam:SetKeyboardSetting('BASE_MOVE_MULTIPLIER', 5)
            Freecam:SetKeyboardSetting('FAST_MOVE_MULTIPLIER', 10)
            Freecam:SetKeyboardSetting('SLOW_MOVE_MULTIPLIER', 10)
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
        local object = data.object
        local curObject
        local objectRot
        local objectPos

        if data.index then
            curObject = data.entity
            objectPos = data.position
            objectRot = data.rotation
        else 
            if self.CurrentObject ~= nil then
                self:CancelPlacement()
            end
            RequestSpawnObject(object)
            curObject = CreateObject(GetHashKey(object), 0.0, 0.0, 0.0, true, true, false)
            Modeler.CurrentCameraLookAt =  Freecam:GetTarget(5.0)
            Modeler.CurrentCameraPosition = Freecam:GetPosition()
            SetEntityCoords(curObject, self.CurrentCameraLookAt.x, self.CurrentCameraLookAt.y, self.CurrentCameraLookAt.z)
            objectRot = GetEntityRotation(curObject)
            objectPos = self.CurrentCameraLookAt
        end


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


        SendNUIMessage({ 
            action = "setupModel",
            data = {
                objectPosition = objectPos,
                objectRotation = objectRot,
                cameraPosition = self.CurrentCameraPosition,
                cameraLookAt = self.CurrentCameraLookAt,
                cartIndex = data.index or nil,
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
        local inCart = false
        for i = 1, #self.Cart do
            if self.Cart[i].entity == self.CurrentObject then
                inCart = true
                break
            end
        end
        if not inCart then
            DeleteEntity(self.CurrentObject)
        end
        SetEntityDrawOutline(self.CurrentObject, false)
        SetEntityAlpha(self.CurrentObject, 255, false)
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

    SelectCartItem = function (self, data)
        if self.CurrentObject ~= nil then
            self:CancelPlacement()
        end
        if data ~= nil then
            self:StartPlacement(data)
        end
    end,

    AddToCart = function (self, data)
        local index = #self.Cart + 1
        local item = {
            index = index,
            label = data.label,
            object = data.object,
            price = data.price,
            entity = self.CurrentObject,
            position = GetEntityCoords(self.CurrentObject),
            rotation = GetEntityRotation(self.CurrentObject),
        }
        self.Cart[index] = item
        SendNUIMessage({
            action = "addToCart",
            data = item
        })
        self:CancelPlacement()
        self.CurrentObject = nil
    end,

    RemoveFromCart = function (self, data)
        local item = data
        if item ~= nil then
            DeleteEntity(item.entity)
            SendNUIMessage({
                action = "removeFromCart",
                data = data.index
            })
            table.remove(self.Cart, data.index)
        end
    end,

    UpdateCartItem = function (self, data)
        local item = self.Cart[data.index]
        if item ~= nil then
            item = data
        end
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

RegisterNUICallback("selectCartItem", function(data, cb)
    Modeler:SelectCartItem(data)
    cb("ok")
end)

RegisterNUICallback("addToCart", function(data, cb)
    Modeler:AddToCart(data)
    cb("ok")
end)

RegisterNUICallback("removeCartItem", function(data, cb)
    Modeler:RemoveFromCart(data)
    cb("ok")
end)

RegisterNUICallback("updateCartItem", function(data, cb)
    Modeler:UpdateCartItem(data)
    cb("ok")
end)