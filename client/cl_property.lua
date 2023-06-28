---@diagnostic disable: duplicate-set-field
Property = {
	property_id = nil,
	propertyData = nil,

	shellData = nil,
	inShell = false,
	shellObj = nil,

	has_access = false,
	owner = false,

	storageTarget = nil,
	clothingTarget = nil,
	furnitureObjs = {},

	garageZone = nil,
	doorbellPool = {},

	entranceTarget = nil, -- needed for ox target
	exitTarget = nil, -- needed for ox target

	blip = nil,


	GetDoorCoords = function(self)
		local coords = nil

		if self.propertyData.apartment then
			local apartment = self.propertyData.apartment
			coords = Config.Apartments[apartment].door
		else
			coords = self.propertyData.door_data
		end

		return coords
	end,

	CreateShell = function(self)
		local ped = cache.ped

		local coords = self:GetDoorCoords()

		local modelHash = self.shellData.hash
		lib.requestModel(modelHash)
		
		self.shellObj = CreateObject(modelHash, coords.x, coords.y, coords.z - 50.0, false, false, false)

		SetModelAsNoLongerNeeded(modelHash)
		FreezeEntityPosition(self.shellObj, true)

		local doorOffset = self.shellData.doorOffset
		local offset = GetOffsetFromEntityInWorldCoords(self.shellObj, doorOffset.x, doorOffset.y, doorOffset.z)
		self:RegisterDoorZone(offset)

		SetEntityCoordsNoOffset(ped, offset.x, offset.y, offset.z, false, false, true)
		SetEntityHeading(ped, self.shellData.doorOffset.heading)
	end,

	RegisterDoorZone = function(self, offset)

		local function leave()
			self:LeaveShell()
		end

		local function checkDoor()
			self:OpenDoorbellMenu()
		end

		if Config.Target == "qb" then
			exports["qb-target"]:AddBoxZone(
				"shellExit",
				vector3(offset.x, offset.y, offset.z),
				1.0,
				self.shellData.doorOffset.width,
				{
					name = "shellExit",
					heading = self.shellData.doorOffset.heading,
					debugPoly = Config.DebugPoly,
					minZ = offset.z - 2.0,
					maxZ = offset.z + 1.0,
				},
				{
					options = {
						{
							label = "Leave Property",
							action = leave,
						},
						{
							label = "Check Door",
							action = checkDoor,
						},
					},
				}
			)
		elseif Config.Target == "ox" then
			self.exitTarget = exports.ox_target:addBoxZone({
				coords = vector3(offset.x, offset.y, offset.z),
				size = vector3(1.0, self.shellData.doorOffset.width, 3.0),
				rotation = self.shellData.doorOffset.heading,
				debug = Config.DebugMode,
				options = {
					{
						name = "leave",
						label = "Leave Property",
						onSelect = leave,
					},
					{
						name = "doorbell",
						label = "Check Door",
						onSelect = checkDoor,
					},
				},
			})
		end
	end,

	RegisterPropertyEntrance = function(self)
		local door_data = self.propertyData.door_data
		local targetName = string.format("%s_%s", self.propertyData.label, self.property_id)
		local label = (self.has_access or self.owner) and "Enter Property" or "Ring Doorbell"

		local function enter()
			TriggerServerEvent("ps-housing:server:enterProperty", self.property_id)
		end

		local function raid()
			TriggerServerEvent("ps-housing:server:raidProperty", self.property_id)
		end

		if Config.Target == "qb" then
			exports["qb-target"]:AddBoxZone(
				targetName,
				vector3(door_data.x, door_data.y, door_data.z),
				door_data.length,
				door_data.width,
				{
					name = targetName,
					heading = door_data.h,
					debugPoly = Config.DebugMode,
					minZ = door_data.z - 1.0,
					maxZ = door_data.z + 2.0,
				},
				{
					options = {
						{
							label = label,
							action = enter,
						},
						{
							label = "Raid Property",
							action = raid,
							canInteract = function()
								local PlayerData = QBCore.Functions.GetPlayerData()
								local job = PlayerData.job
								local jobName = job.name
								local gradeAllowed = tonumber(job.grade.level) >= Config.MinGradeToRaid
								local onDuty = job.onduty

								return jobName == "police" and onDuty and gradeAllowed
							end,
						}
					},
				}
			)
		elseif Config.Target == "ox" then
			self.entranceTarget =  exports.ox_target:addBoxZone({
				id = targetName,
				coords = vector3(door_data.x, door_data.y, door_data.z),
				size = vector3(door_data.length, door_data.width, 3.0),
				rotation = door_data.h,
				debug = Config.DebugMode,
				options = {
					{
						name = "enter",
						label = label,
						onSelect = enter,
					},
				},
			})
		end
	end,

	RegisterGarageZone = function(self)
		if not next(self.propertyData.garage_data) then
			return
		end

		if (not self.hash_access and not self.owner) or not self.owner then
			return
		end

		local garageData = self.propertyData.garage_data
		local garageName = string.format("property-%s-garage", self.property_id)

		local data = {
			takeVehicle = {
				x = garageData.x,
				y = garageData.y,
				z = garageData.z,
				w = garageData.h
			},
			type = "house",
			label = self.propertyData.label
		}

		TriggerEvent("qb-garages:client:addHouseGarage", self.property_id, data)

		self.garageZone = BoxZone:Create(vector3(garageData.x, garageData.y, garageData.z), garageData.length, garageData.width, {
			name = garageName,
			debugPoly = Config.DebugMode,
			minZ= garageData.z - 1.0,
			maxZ=garageData.z + 3.0
		})

		self.garageZone:onPlayerInOut(function(isPointInside, point)
			if isPointInside then
				TriggerEvent('qb-garages:client:setHouseGarage', self.property_id, true)
			end
		end)
	end,

	EnterShell = function(self)
		DoScreenFadeOut(500)
		Wait(500)
		self.inShell = true
		self.shellData = Config.Shells[self.propertyData.shell]

		self:CreateShell()

		self.propertyData.furnitures = lib.callback.await('ps-housing:cb:getFurnitures', source, self.property_id)
		self:LoadFurnitures()
		
		local accessAndConfig = self.has_access and Config.AccessCanEditFurniture
		if self.owner or accessAndConfig then
			lib.addRadialItem({
				id = "furniture_menu",
				icon = "house",
				label = "Furniture Menu",
				onSelect = function()
					Modeler:OpenMenu(self.property_id)
				end,
			})
	
			lib.addRadialItem({
				id = "access_menu",
				icon = "key",
				label = "Manage Property Access",
				onSelect = function()
					self:ManageAccessMenu()
				end,
			})
		end

		DoScreenFadeIn(500)
	end,

	LeaveShell = function(self)
		DoScreenFadeOut(500)
		Wait(500)
		if not self.inShell then
			return
		end

		local coords = self:GetDoorCoords()
		SetEntityCoordsNoOffset(cache.ped, coords.x, coords.y, coords.z, false, false, true)

		self.propertyData.furnitures = nil

		if Config.Target == "qb" then
			exports["qb-target"]:RemoveZone("shellExit")
		elseif Config.Target == "ox" then
			exports.ox_target:removeZone(self.exitTarget)
			self.exitTarget = nil
		end

		lib.removeRadialItem("furniture_menu")

		SendNUIMessage({
			action = "setOwnedItems",
			data = {},
		})

		if self.garageZone then
			self.garageZone:destroy()
			self.garageZone = nil
		end

		TriggerServerEvent("ps-housing:server:leaveProperty", self.property_id)

		self:UnloadFurnitures()
		DeleteObject(self.shellObj)

		self.inShell = false
		self.shellObj = nil
		self.shellData = nil
		self.doorbellPool = {}

		DoScreenFadeIn(500)
	end,

	ManageAccessMenu = function(self)
		if not self.owner then
			lib.notify({ title = "Only the owner can do this.", type = "error" })
			return
		end

		-- Creates the menu options
		local id = "property-" .. self.property_id .. "-access"
		local menu = {
			id = id,
			title = "Manage Access",
			options = {},
		}

		menu.options[#menu.options + 1] = {
			title = "Give Access",
			onSelect = function()
				self:GiveAccessMenu()
			end,
		}

		menu.options[#menu.options + 1] = {
			title = "Revoke Access",
			onSelect = function()
				self:RevokeAccessMenu()
			end,
		}

		lib.registerContext(menu)
		lib.showContext(id)
	end,

	GiveAccessMenu = function(self)
		if not self.owner then
			return
		end

		local id = "property-" .. self.property_id .. "-access-give"
		local menu = {
			id = id,
			title = "Give Access",
			options = {},
		}

		local players = lib.callback.await("ps-housing:cb:getPlayersInProperty", source, self.property_id) or {}

		if #players > 0 then
			for i = 1, #players do
				local v = players[i]
				menu.options[#menu.options + 1] = {
					title = v.name,
					description = "Give Access",
					onSelect = function()
						TriggerServerEvent("ps-housing:server:addAccess", self.property_id, v.src)
					end,
				}
			end

			lib.registerContext(menu)
			lib.showContext(id)
		else
			lib.notify({ title = "No one is in the property", type = "error" })
		end
	end,

	RevokeAccessMenu = function(self)
		if not self.owner then
			return
		end

		local id = "property-" .. self.property_id .. "-access-already"
		local alreadyAccessMenu = {
			id = id,
			title = "Revoke Access",
			options = {},
		}

		local playersWithAccess = lib.callback.await("ps-housing:cb:getPlayersWithAccess", source, self.property_id) or {}

		-- only stores names and citizenids in a table so if their offline you can still remove them
		if #playersWithAccess > 0 then
			for i = 1,  #playersWithAccess do
				local v = playersWithAccess[i]
				alreadyAccessMenu.options[#alreadyAccessMenu.options + 1] = {
					title = v.name,
					description = "Remove Access",
					onSelect = function()
						TriggerServerEvent("ps-housing:server:removeAccess", self.property_id, v.citizenid)
					end,
				}
			end
		end

		lib.registerContext(alreadyAccessMenu)
		lib.showContext(id)
	end,

	OpenDoorbellMenu = function(self)
		if not next(self.doorbellPool) then
			lib.notify({ title = "No one is at the door", type = "error" })
			return
		end

		local id = string.format("property-%s-doorbell", self.property_id)
		local menu = {
			id = id,
			title = "People at the door",
			options = {},
		}

		for k, v in pairs(self.doorbellPool) do
			table.insert(menu.options, {
				title = v.name,
				onSelect = function()
					TriggerServerEvent(
						"ps-housing:server:doorbellAnswer",
						{ targetSrc = v.src, property_id = self.property_id }
					)
				end,
			})
		end

		lib.registerContext(menu)
		lib.showContext(id)
	end,

	LoadFurnitures = function(self)
		for i = 1, #self.propertyData.furnitures do
			local v = self.propertyData.furnitures[i]
			local coords = GetOffsetFromEntityInWorldCoords(self.shellObj, v.position.x, v.position.y, v.position.z)
			local hash = v.object

			lib.requestModel(hash)
			local entity = CreateObject(hash, coords.x, coords.y, coords.z, false, true, false)
			SetModelAsNoLongerNeeded(hash)
			SetEntityRotation(entity, v.rotation.x, v.rotation.y, v.rotation.z, 2, true)
			FreezeEntityPosition(entity, true)

			-- For the prerequisites
			if v.type == "storage" then
				self.storageTarget = entity
				-- WARNING: If you change this naming of the property id's, you will mess up all previous property stashes
				local stash = string.format("property_%s", self.property_id)

				local function openStash()
					local stashConfig = Config.Shells[self.propertyData.shell].stash
					TriggerServerEvent("inventory:server:OpenInventory", "stash", stash, stashConfig)
					TriggerEvent("inventory:client:SetCurrentStash", stash)
				end

				if Config.Target == "qb" then
					exports["qb-target"]:AddTargetEntity(entity, {
						options = {
							{
								label = "Storage",
								type = "client",
								action = function()
									openStash()
								end
							},
						},
					})
				elseif Config.Target == "ox" then
					exports.ox_target:addLocalEntity(entity, {
						{
							name = "storage",
							label = "Storage",
							onSelect = openStash,
						},
					})
				end
			elseif v.type == "clothing" then
				self.clothingTarget = entity

				if Config.Target == "qb" then
					exports["qb-target"]:AddTargetEntity(entity, {
						options = {
							{
								label = "Clothing",
								type = "client",
								event = "qb-clothing:client:openOutfitMenu",
							},
						},
					})
				elseif Config.Target == "ox" then
					exports.ox_target:addLocalEntity(entity, {
						{
							name = "clothing",
							label = "Clothing",
							event = "qb-clothing:client:openOutfitMenu",
						},
					})
				end
			end

			self.furnitureObjs[#self.furnitureObjs + 1] = {
				entity = entity,
				id = v.id,
				label = v.label,
				object = v.object,
				position = {
					x = coords.x,
					y = coords.y,
					z = coords.z,
				},
				rotation = {
					x = v.rotation.x,
					y = v.rotation.y,
					z = v.rotation.z,
				},
				type = v.type,
			}

		end

		SendNUIMessage({
			action = "setOwnedItems",
			data = self.furnitureObjs,
		})
	end,

	UnloadFurnitures = function(self)
		for i = 1, #self.furnitureObjs do
			local v = self.furnitureObjs[i]
			local entity = v.entity

			if self.clothingTarget == entity or self.storageTarget == entity then
				if Config.Target == "qb" then
					exports["qb-target"]:RemoveTargetEntity(entity)
				elseif Config.Target == "ox" then
					exports.ox_target:removeLocalEntity(entity)
				end

				if self.clothingTarget == entity then
					self.clothingTarget = nil
				elseif self.storageTarget == entity then
					self.storageTarget = nil
				end
			end

			DeleteObject(entity)
		end

		self.furnitureObjs = {}
	end,

	CreateBlip = function(self)
		local door_data = self.propertyData.door_data
		local blip = AddBlipForCoord(door_data.x, door_data.y, door_data.z)
		SetBlipSprite(blip, 40)
		SetBlipScale(blip, 0.8)
		SetBlipColour(blip, 2)
		SetBlipAsShortRange(blip, true)
		BeginTextCommandSetBlipName("STRING")
		AddTextComponentString(self.propertyData.label .. " - " .. self.property_id)
		EndTextCommandSetBlipName(blip)
		self.blip = blip
	end,

	DeleteBlip = function(self)
		RemoveBlip(self.blip)
		self.blip = nil
	end,

	DeleteProperty = function(self)
		local targetName = string.format("%s_%s", self.propertyData.label, self.property_id)
		if Config.Target == "qb" then
			exports["qb-target"]:RemoveZone(targetName)
		elseif Config.Target == "ox" then
			exports.ox_target:removeZone(self.entranceTarget)
		end

		if self.inShell then
			self:LeaveShell()
			Wait(1000)
		end

		if self.propertyData.apartment then
			ApartmentsTable[self.propertyData.apartment]:RemoveProperty()
		end

		self:DeleteBlip()

		self = nil
	end,
}

function Property:new(propertyData)
	local obj = {}
	obj.property_id = tostring(propertyData.property_id)
	obj.propertyData = propertyData

	--prolly should be done server side just to save the event calls some trouble but someone else can do that
	obj.propertyData.furnitures = {} -- remove furnitures from property data for ram purposes just incase someone decides to create a fucking maze made out of sticks

	local Player = QBCore.Functions.GetPlayerData()
	local citizenid = Player.citizenid

	local owner = false
	if propertyData.owner == citizenid then
		owner = true
	end
	obj.owner = owner

	local has_access = false
	for i = 1, #propertyData.has_access do
		if propertyData.has_access[i] == citizenid then
			has_access = true
			break
		end
	end
	obj.has_access = has_access

	setmetatable(obj, self)
	self.__index = self

	if propertyData.apartment then
		local apartmentName = propertyData.apartment
		local apartment = ApartmentsTable[apartmentName]

		if not apartment and Config.Apartments[apartmentName] then
			ApartmentsTable[apartmentName] = Apartment:new(Config.Apartments[apartmentName])
			apartment = ApartmentsTable[apartmentName]
		elseif not apartment then
			Debug(apartmentName .. " not found in Config")
			return
		end

		apartment:AddProperty(propertyData.property_id)
	else
		obj:RegisterPropertyEntrance()
		obj:RegisterGarageZone()

		if obj.owner or obj.has_access then
			obj:CreateBlip()
		end
	end

	return obj
end

RegisterNetEvent("ps-housing:client:enterProperty", function(property_id)
	local property = PropertiesTable[property_id]
	property:EnterShell()
end)

RegisterNetEvent('ps-housing:client:setFurnitureData', function(property_id, furnitures)
	local property = PropertiesTable[property_id]
	property.propertyData.furnitures = furnitures
end)

RegisterNetEvent("ps-housing:client:updateDoorbellPool", function(property_id, data)
	local property = PropertiesTable[property_id]
	property.doorbellPool = data
end)

-- seperate event so the player doesnt have to leave the shell to update the furniture
RegisterNetEvent("ps-housing:client:updateFurniture", function(propertyData)
	local property_id = propertyData.property_id
	local property = PropertiesTable[property_id]
	property.propertyData.furnitures = propertyData.furnitures
	property:UnloadFurnitures()
	property:LoadFurnitures()
end)

RegisterNetEvent("ps-housing:client:updateProperty", function(propertyData)
	local property_id = propertyData.property_id
	local property = PropertiesTable[property_id]
	propertyData.furnitures = {} -- will be fetched on enter, just to save some ram
	property.propertyData = propertyData

	if property.inShell then
		property:LeaveShell()
	end

	if propertyData.apartment ~= nil then
		local apartment = ApartmentsTable[propertyData.apartment]
		apartment:RemoveProperty(property_id)
	end

	property:DeleteProperty()
	property = nil
	PropertiesTable[property_id] = Property:new(propertyData)
end)