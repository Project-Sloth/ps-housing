local Freecam = exports['fivem-freecam']

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
            DisableControlAction(0, 199, true) -- P
            DisableControlAction(0, 200, true) -- ESC
            Wait(0)
        end
    end)
end

local function isInside(coords)
    local extent = Modeler.shellMinMax

    local isX = coords.x >= extent.min.x and coords.x <= extent.max.x
    local isY = coords.y >= extent.min.y and coords.y <= extent.max.y
    local isZ = coords.z >= extent.min.z and coords.z <= extent.max.z
    if isX and isY and isZ then
        return true
    end

    return false

end

local function getMinMax(shellPos, shellMin, shellMax)
    local min = vector3(shellPos.x + shellMin.x, shellPos.y + shellMin.y, shellPos.z + shellMin.z)
    local max = vector3(shellPos.x + shellMax.x, shellPos.y + shellMax.y, shellPos.z + shellMax.z)
    
    return {min = min, max = max}
end


AddEventHandler('freecam:onTick', function()
    if not Modeler.IsFreecamMode then return end

    local update = true
    local lookAt =  Freecam:GetTarget(5.0)
    local camPos = Freecam:GetPosition()

    -- see if camPos is the same as the last one
    if Modeler.CurrentCameraPosition and Modeler.CurrentCameraLookAt then
        local posX = Modeler.CurrentCameraPosition.x == camPos.x
        local posY = Modeler.CurrentCameraPosition.y == camPos.y
        local posZ = Modeler.CurrentCameraPosition.z == camPos.z

        local lookAtX = Modeler.CurrentCameraLookAt.x == lookAt.x
        local lookAtY = Modeler.CurrentCameraLookAt.y == lookAt.y
        local lookAtZ = Modeler.CurrentCameraLookAt.z == lookAt.z

        if posX and posY and posZ and lookAtX and lookAtY and lookAtZ then
            return
        end
    end

    if not isInside(camPos) then
        Freecam:SetPosition(Modeler.CurrentCameraPosition.x, Modeler.CurrentCameraPosition.y, Modeler.CurrentCameraPosition.z)
        update = false
    end

    if update then
        Modeler.CurrentCameraLookAt =  lookAt
        Modeler.CurrentCameraPosition = camPos
    end

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

    property_id = nil,

    shellPos = nil,
    shellMinMax = nil,

    CurrentObject = nil,
    CurrentCameraPosition = nil,
    CurrentCameraLookAt = nil,
    CurrentObjectAlpha = 200,

    Cart = {},

    -- Hover stuff
    IsHovering = false,
    HoverObject = nil,
    HoverDistance = 5.0,

    OpenMenu = function(self, property_id)


        local property = Property.Get(property_id)

        if not property then return end
        if not property.owner and not property.has_access then return end
        if property.has_access and not Config.AccessCanEditFurniture  then return end 

        self.shellPos = GetEntityCoords(property.shellObj)
        local min, max = GetModelDimensions(property.shellData.hash)

        self.shellMinMax = getMinMax(self.shellPos, min, max)
        
        self.property_id = property_id
        self.IsMenuActive = true

        self:UpdateFurnitures()

        SendNUIMessage({
            action = "setVisible",
            data = true
        })

        SendNUIMessage({
            action = "setFurnituresData",
            data = Config.Furnitures
        })

        -- Owned furniture is set by the Property class
        SetNuiFocus(true, true)
        self:FreecamActive(true)
        self:FreecamMode(false)
    end,

    CloseMenu = function(self)
        self.IsMenuActive = false
        self:ClearCart()

        SendNUIMessage({
			action = "setOwnedItems",
			data = {},
		})

        SendNUIMessage({
            action = "setVisible",
            data = false
        })

        SetNuiFocus(false, false)

        self:HoverOut()
        self:StopPlacement()
        self:FreecamActive(false)

        Wait(500)

        self.CurrentCameraPosition = nil
        self.CurrentCameraLookAt = nil
        self.CurrentObject = nil
        self.property_id = nil
    end,

    FreecamActive = function(self, bool)
        if bool then
            Freecam:SetActive(true)
            Freecam:SetKeyboardSetting('BASE_MOVE_MULTIPLIER', 0.1)
            Freecam:SetKeyboardSetting('FAST_MOVE_MULTIPLIER', 2)
            Freecam:SetKeyboardSetting('SLOW_MOVE_MULTIPLIER', 2)
            Freecam:SetFov(45.0)
            self.IsFreecamMode = true
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
        self:HoverOut() -- stops the hover effect on the previous object because sometimes mouseleave doesnt work
        local object = data.object
        local curObject
        local objectRot
        local objectPos

        Modeler.CurrentCameraLookAt =  Freecam:GetTarget(5.0)
        Modeler.CurrentCameraPosition = Freecam:GetPosition()

        if data.entity then --if the object is already spawned
            curObject = data.entity
            objectPos = GetEntityCoords(curObject)
            objectRot = GetEntityRotation(curObject)
        else 
            local hash = GetHashKey(object)
            if not IsModelInCdimage(hash) then return end
            self:StopPlacement()
            lib.requestModel(hash)

            curObject = CreateObject(hash, 0.0, 0.0, 0.0, false, true, false)
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
                entity = data.entity,
            }
        })

        SetNuiFocus(true, true)
        self.CurrentObject = curObject
    end,

    MoveObject = function (self, data)
        local coords = vec3(data.x + 0.0, data.y + 0.0, data.z + 0.0)
        if not isInside(coords) then
            return
        end

        SetEntityCoords(self.CurrentObject, coords)
        -- get the current offset of this object in relation to the 
    end,

    RotateObject = function (self, data)
        SetEntityRotation(self.CurrentObject, data.x + 0.0, data.y + 0.0, data.z + 0.0)
    end,

    StopPlacement = function (self)
        if self.CurrentObject == nil then return end

        local canDelete = true
        for k, v in pairs(self.Cart) do
            if k == self.CurrentObject then
                canDelete = false
                break
            end
        end
        -- furnitureObjs
        -- see if its an owned object
        local property = PropertiesTable[self.property_id]
        local ownedfurnitures = property.furnitureObjs
        for i = 1, #ownedfurnitures do
            if ownedfurnitures[i].entity == self.CurrentObject then
                self:UpdateFurniture(ownedfurnitures[i])
                canDelete = false
                break
            end
        end

        if canDelete then
            DeleteEntity(self.CurrentObject)
        end

        SetEntityDrawOutline(self.CurrentObject, false)
        SetEntityAlpha(self.CurrentObject, 255, false)
        self.CurrentObject = nil
    end,

    UpdateFurnitures = function(self)

        if not self.IsMenuActive then
            return
        end

        if not self.property_id then return end

        local property = Property.Get(self.property_id)

        if not property then return end
        if not property.owner and not property.has_access then return end
        if property.has_access and not Config.AccessCanEditFurniture  then return end 


        SendNUIMessage({
			action = "setOwnedItems",
			data = property.furnitureObjs,
		})
    end,

    -- can be better
    -- everytime "Stop Placement" is pressed on an owned object, it will update the furniture 
    -- maybe should do it all at once when the user leaves the menu????
    UpdateFurniture = function (self, item)
        local newPos = GetEntityCoords(item.entity)
        local newRot = GetEntityRotation(item.entity)
        DeleteEntity(item.entity)

        local hash = GetHashKey(item.object)
        lib.requestModel(hash)

        if not IsModelInCdimage(hash) then return end

        item.entity = CreateObject(GetHashKey(item.object), newPos.x, newPos.y, newPos.z, false, true, false)
        SetEntityRotation(item.entity, newRot.x, newRot.y, newRot.z)
        FreezeEntityPosition(item.entity, true)

        local offsetPos = {
                x = math.floor((newPos.x - self.shellPos.x) * 10000) / 10000,
                y = math.floor((newPos.y - self.shellPos.y) * 10000) / 10000,
                z = math.floor((newPos.z - self.shellPos.z) * 10000) / 10000,
        }

        local newFurniture = {
            id = item.id,
            label = item.label,
            object = item.object,
            position = offsetPos,
            rotation = newRot,
            type = item.type,
            movedObject = true
        }

        TriggerServerEvent("ps-housing:server:updateFurniture", self.property_id, newFurniture)
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
        self:StopPlacement()

        if data ~= nil then
            self:StartPlacement(data)
        end
    end,

    AddToCart = function (self, data)
        local item = {
            label = data.label,
            object = data.object,
            price = data.price,
            entity = self.CurrentObject,
            position = GetEntityCoords(self.CurrentObject),
            rotation = GetEntityRotation(self.CurrentObject),
            type = data.type,
        }

        self.Cart[self.CurrentObject] = item

        SendNUIMessage({
            action = "addToCart",
            data = item
        })

        self:StopPlacement()
        self.CurrentObject = nil
    end,

    RemoveFromCart = function (self, data)
        local item = data

        if item ~= nil then
            DeleteEntity(item.entity)

            SendNUIMessage({
                action = "removeFromCart",
                data = item
            })

            self.Cart[data.entity] = nil
        end
    end,

    UpdateCartItem = function (self, data)
        local item = self.Cart[data.entity]

        if item ~= nil then
            item = data
        end
    end,

    ClearCart = function (self)
        for _, v in pairs(self.Cart) do
            DeleteEntity(v.entity)
        end

        self.Cart = {}
        SendNUIMessage({
            action = "clearCart"
        })
    end,

    BuyCart = function (self)
        local items = {}
        local totalPrice = 0

	-- If the cart is empty, return notify
        if not next(self.Cart) then
	    Framework[Config.Notify].Notify("Your cart is empty", "error")
            return
        end

        -- seperate loop to get total price so it doesnt have to do all that math for no reason
        for _, v in pairs(self.Cart) do
            totalPrice = totalPrice + v.price
        end

        PlayerData = QBCore.Functions.GetPlayerData()
        if PlayerData.money.cash < totalPrice and PlayerData.money.bank < totalPrice then
	    Framework[Config.Notify].Notify("You don't have enough money!", "error")
            return
        end

        for _, v in pairs(self.Cart) do

            local offsetPos = {
                x = math.floor((v.position.x - self.shellPos.x) * 10000) / 10000,
                y = math.floor((v.position.y - self.shellPos.y) * 10000) / 10000,
                z = math.floor((v.position.z - self.shellPos.z) * 10000) / 10000,
            }
            
            local id = tostring(math.random(100000, 999999)..self.property_id)

            items[#items + 1] = {
                id = id,
                object = v.object,
                label = v.label,
                position = offsetPos,
                rotation = v.rotation,
                type = v.type,
            }
        end

        TriggerServerEvent("ps-housing:server:buyFurniture", self.property_id, items, totalPrice)

        self:ClearCart()
    end,

    SetHoverDistance = function (self, data)
        self.HoverDistance = data + 0.0
    end,

    HoverIn = function (self, data)
        if self.HoverObject then
            local tries = 0
            while DoesEntityExist(self.HoverObject) do
                SetEntityAsMissionEntity(self.HoverObject, true, true)
                DeleteEntity(self.HoverObject)
                Wait(50)
                tries = tries + 1
                if tries > 25 then
                    break
                end
            end

            self.HoverObject = nil
        end

        local isDoor = false
        local object = data.object or nil
        if object == nil then return end

        local hash = GetHashKey(object)
        if not IsModelInCdimage(hash) then return end
        lib.requestModel(hash)
        if self.HoverObject then return end
        if data.type == "door" then isDoor = true end

        self.HoverObject = CreateObject(hash, 0.0, 0.0, 0.0, false, false, isDoor)

        Modeler.CurrentCameraLookAt =  Freecam:GetTarget(self.HoverDistance)

        local camRot = Freecam:GetRotation()
        SetEntityCoords(self.HoverObject, self.CurrentCameraLookAt.x, self.CurrentCameraLookAt.y, self.CurrentCameraLookAt.z)
        FreezeEntityPosition(self.HoverObject, true)
        SetEntityCollision(self.HoverObject, false, false)
        SetEntityRotation(self.HoverObject, 0.0, 0.0, camRot.z)

        self.IsHovering = true
        while self.IsHovering do
            local rot = GetEntityRotation(self.HoverObject)
            SetEntityRotation(self.HoverObject, rot.x, rot.y, rot.z + 0.1)
            Wait(0)
        end
    end,

    HoverOut = function (self)
        if self.HoverObject == nil then return end
        if self.HoverObject and self.HoverObject ~= 0 then
            local tries = 0
            while DoesEntityExist(self.HoverObject) do
                SetEntityAsMissionEntity(self.HoverObject, true, true)
                DeleteEntity(self.HoverObject)
                Wait(50)
                tries = tries + 1
                if tries > 25 then
                    break
                end
            end
            self.HoverObject = nil
        end
        self.IsHovering = false
    end,

    SelectOwnedItem = function (self, data)
        self:StopPlacement()
        if data ~= nil then
            self:StartPlacement(data)
        end
    end,

    RemoveOwnedItem = function (self, data)
        local item = data

        if item ~= nil then
            SendNUIMessage({
                action = "removeOwnedItem",
                data = item
            })

            TriggerServerEvent("ps-housing:server:removeFurniture", self.property_id, item.id)
        end
    end,
}

RegisterNUICallback("previewFurniture", function(data, cb)
	Modeler:StartPlacement(data)
	cb("ok")
end)

RegisterNUICallback("moveObject", function(data, cb)
    Modeler:MoveObject(data)
    cb("ok")
end)

RegisterNUICallback("rotateObject", function(data, cb)
    Modeler:RotateObject(data)
    cb("ok")
end)

RegisterNUICallback("stopPlacement", function(data, cb)
    Modeler:StopPlacement()
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

RegisterNUICallback("buyCartItems", function(data, cb)
    Modeler:BuyCart()
    cb("ok")
end)

RegisterNUICallback("hoverIn", function(data, cb)
    Modeler:HoverIn(data)
    cb("ok")
end)

RegisterNUICallback("hoverOut", function(data, cb)
    Modeler:HoverOut()
    cb("ok")
end)

RegisterNUICallback("setHoverDistance", function(data, cb)
    Modeler:SetHoverDistance(data)
    cb("ok")
end)

RegisterNUICallback("selectOwnedItem", function(data, cb)
    Modeler:SelectOwnedItem(data)
    cb("ok")
end)

RegisterNUICallback("removeOwnedItem", function(data, cb)
    Modeler:RemoveOwnedItem(data)
    cb("ok")
end)

RegisterNUICallback("showNotification", function(data, cb)
    Framework[Config.Notify].Notify(data.message, data.type)
    cb("ok")
end)
