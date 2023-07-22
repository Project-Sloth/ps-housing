-- TBH I should have learnt how lua inheritance worked instead of making a new class but oh well. Maybe next time

Apartment = {
    apartmentData = {},
    apartments = {},

    entranceTarget = nil,
    blip = nil,
}
Apartment.__index = Apartment

function Apartment:new(apartmentData)
    local self = setmetatable({}, Apartment)
    self.apartmentData = apartmentData
    self.apartments = {}

    self:RegisterPropertyEntrance()
    self:CreateBlip()
    return self
end

function Apartment:RegisterPropertyEntrance()
    local door = self.apartmentData.door
    local targetName = string.format("%s_apartment",self.apartmentData.label)

    -- not sure why but referencing self directy runs it when registering the zones
    local function enterApartment() 
        self:EnterApartment()
    end

    local function seeAll()
        self:GetMenuForAll()
    end

    local function seeAllToRaid()
        self:GetMenuForAllToRaid()
    end

    local size = vector3(door.length, door.width, 3.0)
    local heading = door.h

    Framework[Config.Target].AddApartmentEntrance(door, size, heading, self.apartmentData.label, enterApartment, seeAll, seeAllToRaid, targetName)
end

function Apartment:EnterApartment()
    for propertyId, _  in pairs(self.apartments) do
        local property = PropertiesTable[propertyId]
        if property.owner then
            TriggerServerEvent('ps-housing:server:enterProperty', propertyId)
            return
        end
    end

    Framework[Config.Notify].Notify("You dont have an apartment here.", "error")
end

function Apartment:GetMenuForAll()
    if next(self.apartments) == nil then 
        Framework[Config.Notify].Notify("There are no apartments here.", "error")
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
            title = self.apartmentData.label .. " " .. propertyId,
            onSelect = function()
                TriggerServerEvent('ps-housing:server:enterProperty', propertyId) 
            end,
        })
    end 

    lib.registerContext(menu)
    lib.showContext(id)
end

function Apartment:GetMenuForAllToRaid()
    if next(self.apartments) == nil then 
        Framework[Config.Notify].Notify("There are no apartments here.", "error")
        return
    end

    local id = "apartments-" .. self.apartmentData.label
    local menu = {
        id = id,
        title = "Apartments To Raid",
        options = {}
    }

    for propertyId, _ in pairs(self.apartments) do
        table.insert(menu.options,{
            title = "Raid " .. self.apartmentData.label .. " " .. propertyId,
            onSelect = function()
                TriggerServerEvent("ps-housing:server:raidProperty", propertyId)
            end,
        })
    end 

    lib.registerContext(menu)
    lib.showContext(id)
end

function Apartment:CreateBlip(hasProperty)
    self:DeleteBlip()

    local door = self.apartmentData.door
    local blip = AddBlipForCoord(door.x, door.y, door.z)

    SetBlipSprite(blip, 475)
    SetBlipScale(blip, 0.8)
    
    if hasProperty then
        SetBlipColour(blip, 2)
    else
        SetBlipColour(blip, 4)
    end

    SetBlipAsShortRange(blip, true)
    BeginTextCommandSetBlipName("STRING")
    AddTextComponentString(self.apartmentData.label)
    EndTextCommandSetBlipName(blip)
    self.blip = blip
end

function Apartment:DeleteBlip()
    if not self.blip then return end
    RemoveBlip(self.blip)
    self.blip = nil
end

function Apartment:AddProperty(propertyId)
    self.apartments[propertyId] = true

    local property = Property.Get(propertyId)

    if property?.owner then
        self:CreateBlip(true)
    end
end

function Apartment:RemoveProperty(propertyId)
    if not self:HasProperty(propertyId) then return end
    self.apartments[propertyId] = nil

    local property = Property.Get(propertyId)
    if property.owner then
        self:CreateBlip(false)
    end
end

function Apartment:HasProperty(propertyId)
    return self.apartments[propertyId] ~= nil
end

function Apartment:RemoveApartment()
    local targetName = string.format("%s_apartment",self.apartmentData.label)
    Framework[Config.Target].RemoveTargetZone(targetName)

    self:DeleteBlip()
    self = {}
end

function Apartment.Get(apartmentName)
    return ApartmentsTable[apartmentName]
end
