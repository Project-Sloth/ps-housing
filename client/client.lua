
RegisterCommand("ui", function()
	if not Modeler.IsMenuActive then
		Modeler:OpenMenu()
	else
		Modeler:CloseMenu()
	end
end, false)


local house = nil
AddEventHandler("onResourceStop", function(resourceName)
	if (GetCurrentResourceName() == resourceName) then
		if Modeler.IsMenuActive then
			Modeler:CloseMenu()
		end
		if house then
			DeleteObject(house)
		end
	end
end)

RegisterNUICallback("previewFurniture", function(data, cb)
	Modeler:StartPlacement(data)
	cb("ok")
end)

RegisterCommand("test", function()
	local ped = PlayerPedId()
	local coords = GetEntityCoords(ped)
	local model = 'shell_v16high'
	RequestModel(GetHashKey(model))
	while not HasModelLoaded(GetHashKey(model)) do Wait(0) end
	house = CreateObject(GetHashKey(model), coords.x, coords.y, coords.z - 50.0, false, false, false)
	FreezeEntityPosition(house, true)
	SetEntityCoordsNoOffset(ped, GetEntityCoords(house))
end)

RegisterCommand('del', function()
	DeleteObject(house)
end)

