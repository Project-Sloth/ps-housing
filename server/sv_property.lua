Property = {
    property_id = nil,
    propertyData = nil,
    playersInside = {},  -- src

    PlayerEnter = function (self, src)
        self.playersInside[src] = true
        TriggerClientEvent('ps-housing:client:enterProperty', src, self.property_id)
    end,

    PlayerLeave = function (self, src)
        self.playersInside[src] = nil
    end,

    CheckForAccess = function (self, cid)
        for i = 1, #self.propertyData.has_access do
            if self.propertyData.has_access[i] == cid then
                return true
            end
        end
        return false
    end,

    UpdateFurnitures = function (self, furnitures)
        self.propertyData.furnitures = furnitures
        MySQL.update("UPDATE properties SET furnitures = @furnitures WHERE property_id = @property_id", {
            ["@furnitures"] = json.encode(furnitures),
            ["@property_id"] = self.property_id
        })
        TriggerClientEvent('ps-housing:client:updateProperty', -1, self.propertyData, true)
    end,

    UpdateLabel = function (self, label)
        self.propertyData.label = label
        MySQL.update("UPDATE properties SET label = @label WHERE property_id = @property_id", {
            ["@label"] = label,
            ["@property_id"] = self.property_id
        })
    end,

    UpdateShell = function (self, shell)
        self.propertyData.shell = shell
        MySQL.update("UPDATE properties SET shell = @shell WHERE property_id = @property_id", {
            ["@shell"] = shell,
            ["@property_id"] = self.property_id
        })
    end,

    UpdateOwner = function (self, owner)
        self.propertyData.owner = owner
        MySQL.update("UPDATE properties SET owner = @owner WHERE property_id = @property_id", {
            ["@owner"] = owner,
            ["@property_id"] = self.property_id
        })
    end,

    UpdateImgs = function (self, imgs)
        self.propertyData.imgs = imgs
        MySQL.update("UPDATE properties SET extra_img = @imgs WHERE property_id = @property_id", {
            ["@imgs"] = json.encode(imgs),
            ["@property_id"] = self.property_id
        })
    end,

    UpdateDoorCoords = function (self, data)
        self.propertyData.door_data = data
        MySQL.update("UPDATE properties SET door_data = @data WHERE property_id = @property_id", {
            ["@data"] = data,
            ["@property_id"] = self.property_id
        })
    end,

    Updatehas_access = function (self, has_access)
        self.propertyData.has_access = has_access
        MySQL.update("UPDATE properties SET has_access = @has_access WHERE property_id = @property_id", {
            ["@has_access"] = has_access, --Array of cids
            ["@property_id"] = self.property_id
        })
    end,

    UpdateGarage = function (self, garage)
        MySQL.update("UPDATE properties SET garage_data = @garageCoords WHERE property_id = @property_id", {
            ["@garageCoords"] = garage,
            ["@property_id"] = self.property_id
        })
    end,

    DeleteProperty = function (self)
        MySQL.Async.execute("DELETE FROM properties WHERE property_id = @property_id", {
            ["@property_id"] = self.property_id
        }, function (rowsChanged)
            if rowsChanged > 0 then
                print("Deleted property with id: " .. self.property_id)
            end
        end)
    end,
}

function Property:new(propertyData)
    local obj = {}
    obj.propertyData = propertyData
    obj.property_id = propertyData.property_id
    obj.playersInside = {}
    setmetatable(obj, self)
    self.__index = self

    return obj
end

RegisterNetEvent('ps-housing:server:enterProperty', function (property_id)
    local src = source
    local property = PropertiesTable[property_id]
    if not property then return end
    local Player = QBCore.Functions.GetPlayer(src)
    local PlayerData = Player.PlayerData
    local citizenid = PlayerData.citizenid
    if property.propertyData.owner == citizenid or property:CheckForAccess(citizenid) then
        property:PlayerEnter(src)
        return
    end

    TriggerClientEvent('QBCore:Notify', src, "You do not have access to this property! Ring the doorbell instead.", "error")
end)

RegisterNetEvent('ps-housing:server:leaveProperty', function (property_id)
    local src = source
    local property = PropertiesTable[property_id]
    if not property then return end
    property:PlayerLeave(src)
end)

RegisterNetEvent("ps-housing:server:buyFurniture", function(property_id, items, price)
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    local PlayerData = Player.PlayerData
    local cid = PlayerData.citizenid
    local property = PropertiesTable[property_id]
    if not property then return end
    if not property:CheckForAccess(cid) then return end
    local price = tonumber(price)
    if price > Player.PlayerData.money.bank then
        TriggerClientEvent('QBCore:Notify', src, "You do not have enough money!", "error")
        return
    end
    Player.Functions.RemoveMoney('bank', price, "bought furniture")
    property:UpdateFurnitures(items)
    TriggerClientEvent('QBCore:Notify', src, "You bought furniture for $" .. price, "success")
end)
