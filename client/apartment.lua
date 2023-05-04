Apartment = {
    apartmentData = {},
    apartments = {},

    RegisterPropertyEntrance = function (self)
        local door = self.apartmentData.door
        local targetname = string.gsub(self.apartmentData.label, "%s+", "").."_apartment"
        if Config.Target == "qb" then
            exports['qb-target']:AddBoxZone(targetname, vector3(door.x, door.y, door.z), door.length, door.width, {
                name = targetname,
                heading = door.h,
                debugPoly = Config.DebugZones,
                minZ = door.z - 1.0,
                maxZ = door.z + 2.0,
            }, {
                options = {
                    {
                        label = "Enter Apartment",
                        action = function(entity) -- This is the action it has to perform, this REPLACES the event and this is OPTIONAL
                            if IsPedAPlayer(entity) then return false end -- This will return false if the entity interacted with is a player and otherwise returns true
                            self:EnterApartment()
                        end,
                    },
                    {
                        label = "See all apartments",
                        action = function(entity) -- This is the action it has to perform, this REPLACES the event and this is OPTIONAL
                            if IsPedAPlayer(entity) then return false end -- This will return false if the entity interacted with is a player and otherwise returns true
                            self:GetMenuForAll()
                        end,
                    }
                }
            })
        elseif Config.Target == "ox" then
            exports.ox_target:addBoxZone({
                id = targetname,
                coords = vector3(door.x, door.y, door.z),
                size = vector3(door.length, door.width, 3.0),
                rotation = door.h,
                debug = Config.DebugZones,
                options = {
                    {
                        name = "enter",
                        label = "Enter Apartment",
                        onSelect = function()
                            self:EnterApartment()
                        end,
                    },
                    {
                        name = "seeall",
                        label = "See all apartments",
                        onSelect = function()
                            self:GetMenuForAll()
                        end,
                    }
                }
            })
        end
    end,

    EnterApartment = function(self)
        if next(self.apartments) == nil then 
            lib.notify({title="You dont have an apartment here.", type="error"})
            return
        end
        for propertyId, _  in pairs(self.apartments) do
            local property = PropertiesTable[propertyId]
            if property.propertyData.owner then
                TriggerServerEvent('ps-housing:server:enterProperty', property.property_id) 
            else
                lib.notify({title="You dont have an apartment here.", type="error"})
            end
        end
    end,

    GetMenuForAll = function(self)
        if next(self.apartments) == nil then 
            lib.notify({title="There are no apartments here.", type="error"})
            return
        end
        local id = "apartments-" .. self.apartmentData.label
        local menu = {
            id = id,
            title = "Apartments",
            options = {}
        }
        for propertyId, _ in pairs(self.apartments) do
            table.insert(menu.options,{
                title = PropertiesTable[propertyId].propertyData.label,
                onSelect = function()
                    TriggerServerEvent('ps-housing:server:enterProperty', propertyId) 
                end,
            })
        end 
        lib.registerContext(menu)
        lib.showContext(id)
    end,

    AddProperty = function(self, propertyId)
        self.apartments[propertyId] = true
    end,

    RemoveProperty = function(self, propertyId) 
        if self.apartments[propertyId] == nil then return end
        self.apartments[propertyId] = nil
    end,
}

function Apartment:new(apartmentData)
    local obj = {}
    obj.apartmentData = apartmentData
    obj.apartments = apartmentData.apartments or {}
    setmetatable(obj, self)
    self.__index = self
    obj:RegisterPropertyEntrance()
    return obj
end