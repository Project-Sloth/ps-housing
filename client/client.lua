local function toggleUI(bool)
	SetNuiFocus(bool, bool)
	SendNUIMessage({
		action = "setVisible",
		data = bool
	})
end

RegisterCommand("UI", function()
	toggleUI(true)
end, false)

RegisterNUICallback("hideUI", function()
    toggleUI(false)
end)