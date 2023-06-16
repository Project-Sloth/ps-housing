-- TBH I should have learnt how lua inheritance worked instead of making a new class but oh well. Maybe next time

Apartment = {
    apartmentData = {},
    apartments = {},

    entranceTarget = nil,
    blip = nil,

    RegisterPropertyEntrance = function (self)
        local door = self.apartmentData.door
        local targetName = string.format("%s_apartment",self.apartmentData.label)

        -- not sure why but referencing self directy runs it when registering the zones
        local function enterApartment() 
            self:EnterApartment()
        end

        local function seeAll()
            self:GetMenuForAll()
        end

        -- can be better 
        --same for below, could make it so it doesnt show Enter Apartment if you dont have one.
        -- but I cant think of a way to do that right now
        if Config.Target == "qb" then
            exports['qb-target']:AddBoxZone(targetName, vector3(door.x, door.y, door.z), door.length, door.width, {
                name = targetName,
                heading = door.h,
                debugPoly = Config.DebugMode,
                minZ = door.z - 1.0,
                maxZ = door.z + 2.0,
            }, {
                options = {
                    {
                        label = "Enter Apartment",
                        action = enterApartment,
                    },
                    {
                        label = "See all apartments",
                        action = seeAll,
                    }
                }
            })
        elseif Config.Target == "ox" then
            self.entranceTarget = exports.ox_target:addBoxZone({
                coords = vector3(door.x, door.y, door.z),
                size = vector3(door.length, door.width, 3.0),
                rotation = door.h,
                debug = Config.DebugMode,
                options = {
                    {
                        name = "enter",
                        label = "Enter Apartment",
                        onSelect = enterApartment,
                    },
                    {
                        name = "seeall",
                        label = "See all apartments",
                        onSelect = seeAll,
                    }
                }
            })
        end
    end,

    EnterApartment = function(self)
        -- can be better
        -- can definitely be better, 
        for propertyId, _  in pairs(self.apartments) do
            local property = PropertiesTable[propertyId]
            if property.owner then
                TriggerServerEvent('ps-housing:server:enterProperty', propertyId)
                return
            end
        end
        lib.notify({title="You dont have an apartment here.", type="error"})
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

    CreateBlip = function(self)
        local door = self.apartmentData.door
		local blip = AddBlipForCoord(door.x, door.y, door.z)
		SetBlipSprite(blip, 475)
		SetBlipScale(blip, 0.8)
		SetBlipColour(blip, 4)
		SetBlipAsShortRange(blip, true)
		BeginTextCommandSetBlipName("STRING")
		AddTextComponentString(self.apartmentData.label)
		EndTextCommandSetBlipName(blip)
		self.blip = blip
	end,

	DeleteBlip = function(self)
		RemoveBlip(self.blip)
		self.blip = nil
	end,

    AddProperty = function(self, propertyId)
        
        self.apartments[propertyId] = true
    end,

    RemoveProperty = function(self, propertyId) 
        if self.apartments[propertyId] == nil then return end

        self.apartments[propertyId] = nil
    end,

    DeleteApartment = function(self)
        local targetName = string.format("%s_apartment", self.apartmentData.label)
		if Config.Target == "qb" then
			exports["qb-target"]:RemoveZone(targetName)
		elseif Config.Target == "ox" then
			exports.ox_target:removeZone(self.entranceTarget)
		end

        for propertyId, _ in pairs(self.apartments) do
            PropertiesTable[propertyId]:DeleteProperty()
        end

		self:DeleteBlip()
		self = nil
    end
}

function Apartment:new(apartmentData)
    local obj = {}

    obj.apartmentData = apartmentData
    obj.apartments = apartmentData.apartments or {}

    setmetatable(obj, self)
    self.__index = self

    obj:RegisterPropertyEntrance()

    obj:CreateBlip()

    return obj
end
