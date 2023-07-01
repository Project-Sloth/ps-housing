Property = {
    property_id = nil,
    propertyData = nil,
    playersInside = {},   -- src
    playersDoorbell = {}, -- src

    raiding = false,
}
Property.__index = Property

function Property:new(propertyData)
    local self = setmetatable({}, Property)

    self.property_id = tostring(propertyData.property_id)
    self.propertyData = propertyData

    return self
end

function Property:PlayerEnter(src)
    local _src = tostring(src)
    self.playersInside[_src] = true

    TriggerClientEvent('qb-weathersync:client:DisableSync', src)
    TriggerClientEvent('ps-housing:client:enterProperty', src, self.property_id)

    if next(self.playersDoorbell) then
        TriggerClientEvent("ps-housing:client:updateDoorbellPool", src, self.property_id, self.playersDoorbell)
        if self.playersDoorbell[_src] then
            self.playersDoorbell[_src] = nil
        end
    end

    local citizenid = GetCitizenid(src)

    if self:CheckForAccess(citizenid) then
        local Player = QBCore.Functions.GetPlayer(src)
        local insideMeta = Player.PlayerData.metadata["inside"]

        insideMeta.property_id = self.property_id
        Player.Functions.SetMetaData("inside", insideMeta)
    end

    local bucket = tonumber(self.property_id) -- because the property_id is a string
    SetPlayerRoutingBucket(src, bucket)
end

function Property:PlayerLeave(src)
    local _src = tostring(src)
    self.playersInside[_src] = nil

    TriggerClientEvent('qb-weathersync:client:EnableSync', src)

    local citizenid = GetCitizenid(src)

    if self:CheckForAccess(citizenid) then
        local Player = QBCore.Functions.GetPlayer(src)
        local insideMeta = Player.PlayerData.metadata["inside"]

        insideMeta.property_id = nil
        Player.Functions.SetMetaData("inside", insideMeta)
    end

    SetPlayerRoutingBucket(src, 0)
end

function Property:CheckForAccess(citizenid)
    if self.propertyData.owner == citizenid then return true end
    return lib.table.contains(self.propertyData, citizenid)
end

function Property:AddToDoorbellPoolTemp(src)
    local _src = tostring(src)

    local name = GetCharName(src)

    self.playersDoorbell[_src] = {
        src = src,
        name = name
    }

    for i = 1, #self.playersInside do
        local targetSrc = tonumber(self.playersInside[i])

        Framework[Config.Notify].Notify(targetSrc, "Someone is at the door.", "info")
        TriggerClientEvent("ps-housing:client:updateDoorbellPool", targetSrc, self.property_id, self.playersDoorbell)
    end

    Framework[Config.Notify].Notify(src, "You rang the doorbell. Just wait...", "info")

    SetTimeout(10000, function()
        if self.playersDoorbell[_src] then
            self.playersDoorbell[_src] = nil
            Framework[Config.Notify].Notify(src, "No one answered the door.", "error")
        end

        for i = 1, #self.playersInside do
            local targetSrc = tonumber(self.playersInside[i])

            TriggerClientEvent("ps-housing:client:updateDoorbellPool", targetSrc, self.property_id, self.playersDoorbell)
        end
    end)
end

function Property:RemoveFromDoorbellPool(src)
    local _src = tostring(src)

    if self.playersDoorbell[_src] then
        self.playersDoorbell[_src] = nil
    end

    for i = 1, #self.playersInside do
        local targetSrc = tonumber(self.playersInside[i])

        TriggerClientEvent("ps-housing:client:updateDoorbellPool", targetSrc, self.property_id, self.playersDoorbell)
    end
end

function Property:StartRaid(src)
    self.raiding = true

    for i = 1, #self.playersInside do
        local targetSrc = tonumber(self.playersInside[i])
        Framework[Config.Notify].Notify(targetSrc, "This Property is being Raided.", "error")
    end

    SetTimeout(Config.RaidTimer * 60000, function()
        self.raiding = false
    end)
end

function Property:UpdateFurnitures(furnitures)
    self.propertyData.furnitures = furnitures

    MySQL.update("UPDATE properties SET furnitures = @furnitures WHERE property_id = @property_id", {
        ["@furnitures"] = json.encode(furnitures),
        ["@property_id"] = self.property_id
    })

    --@@
end

function Property:UpdateLabel(data)
    local label = data.label
    local realtorSrc = data.realtorSrc

    if self.propertyData.label == label then return end
    self.propertyData.label = label

    MySQL.update("UPDATE properties SET label = @label WHERE property_id = @property_id", {
        ["@label"] = label,
        ["@property_id"] = self.property_id
    })

    Debug("Changed Label of property with id: " .. self.property_id, "by: " .. GetPlayerName(realtorSrc))
    --@@
end

function Property:UpdateDescription(data)
    local description = data.description
    local realtorSrc = data.realtorSrc

    if self.propertyData.description == description then return end

    self.propertyData.description = description

    MySQL.update("UPDATE properties SET description = @description WHERE property_id = @property_id", {
        ["@description"] = description,
        ["@property_id"] = self.property_id
    })

    Debug("Changed Description of property with id: " .. self.property_id, "by: " .. GetPlayerName(realtorSrc))
end

function Property:UpdatePrice(data)
    local price = data.price
    local realtorSrc = data.realtorSrc

    if self.propertyData.price == price then return end

    self.propertyData.price = price

    MySQL.update("UPDATE properties SET price = @price WHERE property_id = @property_id", {
        ["@price"] = price,
        ["@property_id"] = self.property_id
    })

    Debug("Changed Price of property with id: " .. self.property_id, "by: " .. GetPlayerName(realtorSrc))
end

function Property:UpdateForSale(data)
    local forsale = data.forsale
    local realtorSrc = data.realtorSrc

    self.propertyData.for_sale = forsale

    MySQL.update("UPDATE properties SET for_sale = @for_sale WHERE property_id = @property_id", {
        ["@for_sale"] = forsale and 1 or 0,
        ["@property_id"] = self.property_id
    })

    Debug("Changed For Sale of property with id: " .. self.property_id, "by: " .. GetPlayerName(realtorSrc))
end

function Property:UpdateShell(data)
    local shell = data.shell
    local realtorSrc = data.realtorSrc

    if self.propertyData.shell == shell then return end

    self.propertyData.shell = shell

    MySQL.update("UPDATE properties SET shell = @shell WHERE property_id = @property_id", {
        ["@shell"] = shell,
        ["@property_id"] = self.property_id
    })

    Debug("Changed Shell of property with id: " .. self.property_id, "by: " .. GetPlayerName(realtorSrc))
end

function Property:UpdateOwner(data)
    local targetSrc = data.targetSrc
    local realtorSrc = data.realtorSrc

    local previousOwner = self.propertyData.owner

    local targetPlayer  = QBCore.Functions.GetPlayer(tonumber(targetSrc))

    local PlayerData = targetPlayer.PlayerData
    local bank = PlayerData.money.bank
    local citizenid = PlayerData.citizenid

    if self.propertyData.owner == citizenid then
        Framework[Config.Notify].Notify(targetSrc, "You already own this property", "error")
        Framework[Config.Notify].Notify(realtorSrc, "Client already owns this property", "error")
        return
    end

    --add callback 
    local targetAllow = lib.callback.await("ps-housing:cb:confirmPurchase", targetSrc, self.propertyData.price, self.propertyData.label, self.propertyData.property_id)

    if targetAllow ~= "confirm" then
        Framework[Config.Notify].Notify(targetSrc, "You did not confirm the purchase", "info")
        Framework[Config.Notify].Notify(realtorSrc, "Client did not confirm the purchase", "error")
        return
    end

    if bank < self.propertyData.price then
                Framework[Config.Notify].Notify(targetSrc, "You do not have enough money in your bank account", "error")
            Framework[Config.Notify].Notify(realtorSrc, "Client does not have enough money in their bank account", "error")
        return
    end

    targetPlayer.Functions.RemoveMoney('bank', self.propertyData.price, "Bought Property: " .. self.propertyData.label)

    local prevPlayer = QBCore.Functions.GetPlayerByCitizenId(previousOwner)
    local realtor = QBCore.Functions.GetPlayer(tonumber(realtorSrc))
    local realtorGradeLevel = realtor.PlayerData.job.grade.level

    local commission = math.floor(self.propertyData.price * Config.Commissions[realtorGradeLevel])

    local totalAfterCommission = self.propertyData.price - commission
    
    if prevPlayer ~= nil then
        prevPlayer.Functions.AddMoney('bank', self.propertyData.price, "Sold Property: " .. self.propertyData.label)
    elseif previousOwner then
        MySQL.Async.execute('UPDATE `players` SET `bank` = `bank` + @price WHERE `citizenid` = @citizenid', {
            ['@citizenid'] = previousOwner,
            ['@price'] = totalAfterCommission
        })
    end
    
    realtor.Functions.AddMoney('bank', commission, "Commission from Property: " .. self.propertyData.label)

    self.propertyData.owner = citizenid

    MySQL.update("UPDATE properties SET owner_citizenid = @owner_citizenid, for_sale = @for_sale WHERE property_id = @property_id", {
        ["@owner_citizenid"] = citizenid,
        ["@for_sale"] = 0,
        ["@property_id"] = self.property_id
    })

    TriggerClientEvent("ps-housing:client:updateProperty", -1, self.propertyData) -- Update all clients here because it doesnt update by itself

    Framework[Config.Notify].Notify(targetSrc, "You have bought the property for $"..self.propertyData.price, "success")
    Framework[Config.Notify].Notify(realtorSrc, "Client has bought the property for $'..self.propertyData.price", "success")
end

function Property:UpdateImgs(data)
    local imgs = data.imgs
    local realtorSrc = data.realtorSrc

    self.propertyData.imgs = imgs

    MySQL.update("UPDATE properties SET extra_imgs = @extra_imgs WHERE property_id = @property_id", {
        ["@extra_imgs"] = json.encode(imgs),
        ["@property_id"] = self.property_id
    })

    Debug("Changed Imgs of property with id: " .. self.property_id, "by: " .. GetPlayerName(realtorSrc))
end


function Property:UpdateDoor(data)
    local door = data.door
    local realtorSrc = data.realtorSrc

    local newData = {
        x = math.floor(door.x * 10000) / 10000,
        y = math.floor(door.y * 10000) / 10000,
        z = math.floor(door.z * 10000) / 10000,
        h = math.floor(door.h * 10000) / 10000,
        length = door.length or 1.5,
        width = door.width or 2.2,
        locked = door.locked or false,
    }

    self.propertyData.door_data = newData

    MySQL.update("UPDATE properties SET door_data = @data WHERE property_id = @property_id", {
        ["@data"] = json.encode(newData),
        ["@property_id"] = self.property_id
    })

    Debug("Changed Door of property with id: " .. self.property_id, "by: " .. GetPlayerName(realtorSrc))
end

function Property:UpdateHas_access(data)
    local has_access = data or {}

    self.propertyData.has_access = has_access

    MySQL.update("UPDATE properties SET has_access = @has_access WHERE property_id = @property_id", {
        ["@has_access"] = json.encode(has_access), --Array of cids
        ["@property_id"] = self.property_id
    })

    Debug("Changed Has Access of property with id: " .. self.property_id)
end

function Property:UpdateGarage(data)
    local garage = data.garage
    local realtorSrc = data.realtorSrc

    local newData = {}

    if data ~= nil then 
        newData = {
            x = math.floor(garage.x * 10000) / 10000,
            y = math.floor(garage.y * 10000) / 10000,
            z = math.floor(garage.z * 10000) / 10000,
            h = math.floor(garage.h * 10000) / 10000,
            length = garage.length or 3.0,
            width = garage.width or 5.0,
        }
    end

    self.propertyData.garage_data = newData

    MySQL.update("UPDATE properties SET garage_data = @garageCoords WHERE property_id = @property_id", {
        ["@garageCoords"] = json.encode(newData),
        ["@property_id"] = self.property_id
    })

    Debug("Changed Garage of property with id: " .. self.property_id, "by: " .. GetPlayerName(realtorSrc))
end

function Property:UpdateApartment(data)
    local apartment = data.apartment
    local realtorSrc = data.realtorSrc
    local targetSrc = data.targetSrc

    self.propertyData.apartment = apartment

    MySQL.update("UPDATE properties SET apartment = @apartment WHERE property_id = @property_id", {
        ["@apartment"] = apartment,
        ["@property_id"] = self.property_id
    })

    Framework[Config.Notify].Notify(realtorSrc, "Changed Apartment of property with id: " .. self.property_id .." to ".. apartment, "success")
    Framework[Config.Notify].Notify(targetSrc, "Changed Apartment to " .. apartment, "success")
    Debug("Changed Apartment of property with id: " .. self.property_id, "by: " .. GetPlayerName(realtorSrc))
end

function Property:DeleteProperty(data)
    local realtorSrc = data.realtorSrc

    MySQL.Async.execute("DELETE FROM properties WHERE property_id = @property_id", {
        ["@property_id"] = self.property_id
    }, function (rowsChanged)
        if rowsChanged > 0 then
            Debug("Deleted property with id: " .. self.property_id, "by: " .. GetPlayerName(data.realtorSrc))
        end
    end)

    TriggerClientEvent("ps-housing:client:removeProperty", -1, self.property_id)

    Framework[Config.Notify].Notify(realtorSrc, "Property with id: " .. self.property_id .." has been removed.", "info")

    Debug("Deleted property with id: " .. self.property_id, "by: " .. GetPlayerName(realtorSrc))
end

function Property.Get(property_id)
    return PropertiesTable[tostring(property_id)]
end

RegisterNetEvent('ps-housing:server:enterProperty', function (property_id)
    local src = source
    Debug("Player is trying to enter property", property_id)

    local property = Property.Get(property_id)

    if not property then 
        Debug("Properties returned", json.encode(PropertiesTable, {indent = true}))
        return 
    end

    local citizenid = GetCitizenid(src)

    if property:CheckForAccess(citizenid) then
        Debug("Player has access to property")
        property:PlayerEnter(src)
        Debug("Player entered property")
        return
    end

    local ringDoorbellConfirmation = lib.callback.await('ps-housing:cb:ringDoorbell', src)

    if ringDoorbellConfirmation == "confirm" then
        property:AddToDoorbellPoolTemp(src)
        Debug("Ringing doorbell") 
        return
    end
end)

RegisterNetEvent('ps-housing:server:raidProperty', function (property_id)
    local src = source
    Debug("Player is trying to raid property", property_id)

    local property = Property.Get(property_id)

    if not property then 
        Debug("Properties returned", json.encode(PropertiesTable, {indent = true}))
        return 
    end

    local PlayerData = GetPlayerData(src)
    local job = PlayerData.job
    local jobName = job.name
    local gradeAllowed = tonumber(job.grade.level) >= Config.MinGradeToRaid
    local onDuty = job.onduty

    if jobName == "police" and onDuty and gradeAllowed then
        if not property.raiding then
            local confirmRaid = lib.callback.await('ps-housing:cb:confirmRaid', src, property.propertyData.label, property_id)
            if confirmRaid == "confirm" then
                property:StartRaid(src)
                property:PlayerEnter(src)
                Framework[Config.Notify].Notify(src, "Raid started", "success")
            end
        else
            Framework[Config.Notify].Notify(src, "Raid in progress", "success")
            property:PlayerEnter(src)
        end
    end
end)


lib.callback.register('ps-housing:cb:getFurnitures', function(source, property_id)
    local property = Property.Get(property_id)
    if not property then return end
    return property.propertyData.furnitures or {}
end)


lib.callback.register('ps-housing:cb:getPlayersInProperty', function(source, property_id)

    local property = Property.Get(property_id)
    if not property then return end

    local players = {}

    for plySrc, _ in pairs(property.playersInside) do
        if tonumber(plySrc) ~= source then
            local name = GetCharName(plySrc)

            players[#players + 1] = {
                src = plySrc,
                name = name
            }
        end
    end

    return players or {}
end)

RegisterNetEvent('ps-housing:server:leaveProperty', function (property_id)
    local src = source
    local property = Property.Get(property_id)

    if not property then return end

    property:PlayerLeave(src)
end)

-- When player presses doorbell, owner can let them in and this is what is triggered
RegisterNetEvent("ps-housing:server:doorbellAnswer", function (data) 
    local src = source
    local targetSrc = data.targetSrc

    local property = Property.Get(data.property_id)
    if not property then return end
    
    if not property.playersInside[tostring(src)] then return end
    property:RemoveFromDoorbellPool(targetSrc)
    
    property:PlayerEnter(targetSrc)
end)

--@@ NEED TO REDO THIS DOG SHIT
RegisterNetEvent("ps-housing:server:buyFurniture", function(property_id, items, price)
    local src = source

    local citizenid = GetCitizenid(src)
    local PlayerData = GetPlayerData(src)
    local Player = GetPlayer(src)
    -- ik ik, i cbf rn. if your reading this and its still shit, tell me

    local property = Property.Get(property_id)
    if not property then return end

    if not property:CheckForAccess(citizenid) then return end

    local price = tonumber(price)

    if price > PlayerData.money.bank and price > PlayerData.money.cash then
        Framework[Config.Notify].Notify(src, "You do not have enough money!", "error")
        return
    end

    if price > PlayerData.money.bank then
        Player.Functions.RemoveMoney('cash', price, "Bought furniture")
    else
        Player.Functions.RemoveMoney('bank', price, "Bought furniture")
    end

    local numFurnitures = #property.propertyData.furnitures

    for i = 1, #items do
        numFurnitures = numFurnitures + 1
        property.propertyData.furnitures[numFurnitures] = items[i]
    end

    property:UpdateFurnitures(property.propertyData.furnitures)

    Framework[Config.Notify].Notify(src, "You bought furniture for $" .. price, "success")
    Debug("Player bought furniture for $" .. price, "by: " .. GetPlayerName(src))
end)

RegisterNetEvent("ps-housing:server:removeFurniture", function(property_id, itemid)
    local src = source
    
    local property = Property.Get(property_id)
    if not property then return end
    
    local citizenid = GetCitizenid(src)
    if not property:CheckForAccess(citizenid) then return end

    local currentFurnitures = property.propertyData.furnitures

    for k, v in pairs(currentFurnitures) do
        if v.id == itemid then
            currentFurnitures[k] = nil
            break
        end
    end

    property:UpdateFurnitures(currentFurnitures)
end)

-- @@ VERY BAD 
RegisterNetEvent("ps-housing:server:updateFurniture", function(property_id, item)
    local src = source

    local property = Property.Get(property_id)
    if not property then return end

    local citizenid = GetCitizenid(src)
    if not property:CheckForAccess(citizenid) then return end

    local currentFurnitures = property.propertyData.furnitures

    for k, v in pairs(currentFurnitures) do
        if v.id == item.id then
            currentFurnitures[k] = item
            Debug("Updated furniture", json.encode(item))
            break
        end
    end

    property:UpdateFurnitures(currentFurnitures)
end)

RegisterNetEvent("ps-housing:server:addAccess", function(property_id, srcToAdd)
    local src = source

    local citizenid = GetCitizenid(src)
    local property = Property.Get(property_id)
    if not property then return end

    if not property.propertyData.owner == citizenid then
        -- hacker ban or something
        Framework[Config.Notify].Notify(src, "You are not the owner of this property!", "error")
        return
    end

    local has_access = property.propertyData.has_access

    local targetCitizenid GetCitizenid(srcToAdd)
    local targetPlayer = GetPlayer(srcToAdd)

    if not property:CheckForAccess(targetCitizenid) then
        has_access[#has_access+1] = targetCitizenid
        property:UpdateHas_access(has_access)

        Framework[Config.Notify].Notify(src, "You added access to " .. targetPlayer.charinfo.firstname .. " " .. targetPlayer.charinfo.lastname, "success")
        Framework[Config.Notify].Notify(srcToAdd, "You got access to " .. property.propertyData.label, "success")
    else
        Framework[Config.Notify].Notify(srcToAdd, "This person already has access to this property!", "error")
    end
end)

RegisterNetEvent("ps-housing:server:removeAccess", function(property_id, citizenidToRemove)
    local src = source

    local citizenid = GetCitizenid(src)
    local property = Property.Get(property_id)
    if not property then return end

    if not property.propertyData.owner == citizenid then
        -- hacker ban or something
        TriggerClientEvent("ox_lib:notify", src, {title="You are not the owner of this property!", type="error"})
        return
    end

    local has_access = property.propertyData.has_access
    local citizenidToRemove = citizenidToRemove

    if property:CheckForAccess(citizenidToRemove) then
        for i = 1, #has_access do
            if has_access[i] == citizenidToRemove then
                table.remove(has_access, i)
                break
            end
        end 

        property:UpdateHas_access(has_access)

        local playerToAdd = QBCore.Functions.GetPlayerByCitizenId(citizenidToRemove) or QBCore.Functions.GetOfflinePlayerByCitizenId(citizenidToRemove)
        local removePlayerData = playerToAdd.PlayerData
        local srcToRemove = removePlayerData.source

        Framework[Config.Notify].Notify(src, "You removed access from " .. removePlayerData.charinfo.firstname .. " " .. removePlayerData.charinfo.lastname, "success")

        if srcToRemove then
            Framework[Config.Notify].Notify(srcToRemove, "You lost access to " .. property.propertyData.label, "error")
        end
    else
        Framework[Config.Notify].Notify(src, "This person does not have access to this property!", "error")
    end
end)

lib.callback.register("ps-housing:cb:getPlayersWithAccess", function (source, property_id)
    local src = source
    local citizenidSrc = GetCitizenid(src)
    local property = Property.Get(property_id)
    
    if not property then return end
    if property.propertyData.owner ~= citizenidSrc then return end

    local withAccess = {}
    local has_access = property.propertyData.has_access

    for i = 1, #has_access do
        local citizenid = has_access[i]
        local Player = QBCore.Functions.GetPlayerByCitizenId(citizenid) or QBCore.Functions.GetOfflinePlayerByCitizenId(citizenid)
        if Player then
            withAccess[#withAccess + 1] = {
                citizenid = citizenid,
                name = Player.PlayerData.charinfo.firstname .. " " .. Player.PlayerData.charinfo.lastname
            }
        end
    end

    return withAccess
end)

RegisterNetEvent('ps-housing:server:resetMetaData', function()
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    local insideMeta = Player.PlayerData.metadata["inside"]

    insideMeta.property_id = nil
    Player.Functions.SetMetaData("inside", insideMeta)
end)