
RegisterCommand("ui", function()
	if not Modeler.IsMenuActive then
		Modeler:OpenMenu()
	else
		Modeler:CloseMenu()
	end
end, false)

AddEventHandler("onResourceStop", function(resourceName)
	if (GetCurrentResourceName() == resourceName) then
		Modeler:CancelPlacement()
	end
end)

RegisterNUICallback("previewFurniture", function(data, cb)
	Modeler:StartPlacement(data)
	cb("ok")
end)