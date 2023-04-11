local function toggleUI(bool)
	SetNuiFocus(bool, bool)
	SendNUIMessage({
		action = "setVisible",
		data = bool
	})
end

local UIOpen = false
RegisterCommand("UI", function()
	UIOpen = not UIOpen
	toggleUI(UIOpen)
end, false)


AddEventHandler("onResourceStart", function(resourceName)
	if (GetCurrentResourceName() ~= resourceName) then
		return
	end
	
	SendNUIMessage({
		action = "setFurnituresData",
		data = Furnitures
	})

end)