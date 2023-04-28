QBCore = exports['qb-core']:GetCoreObject()
PropertiesTable = {}

exports('GetProperties', function()
	local properties = {}
	for k, v in pairs(PropertiesTable) do
		properties[#properties+1] = v.propertyData
	end
	return properties
end)

exports('GetProperty', function(property_id)
	return PropertiesTable[property_id]
end)

exports('GetShells', function()
	return Config.Shells
end)

RegisterCommand("ui", function()
	if not Modeler.IsMenuActive then
		Modeler:OpenMenu()
	else
		Modeler:CloseMenu()
	end
end, false)

AddEventHandler("onResourceStop", function(resourceName)
	if (GetCurrentResourceName() == resourceName) then
		if Modeler.IsMenuActive then
			Modeler:CloseMenu()
		end
		for k, v in pairs(PropertiesTable) do
			v:DeleteProperty()
		end
	end
end)



local function createProperty(property)
	PropertiesTable[property.property_id] = Property:new(property)
end
RegisterNetEvent('ps-housing:client:addProperty', createProperty)

RegisterNetEvent('ps-housing:client:deleteProperty', function (property_id)
	local property = PropertiesTable[property_id]
	if property then
		property:DeleteProperty()
	end
	PropertiesTable[property_id] = nil
end)


AddEventHandler("QBCore:Client:OnPlayerLoaded", function()
	QBCore.Functions.TriggerCallback('ps-housing:server:requestProperties', function (properties)
		for k, v in pairs(properties) do
			createProperty(v)
		end
	end)
end)

AddEventHandler("onResourceStart", function(resourceName)
	if (GetCurrentResourceName() == resourceName) then
		QBCore.Functions.TriggerCallback('ps-housing:server:requestProperties', function (properties)
			for k, v in pairs(properties) do
				createProperty(v)
			end
		end)
	end
end)





