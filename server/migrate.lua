local AptNames = {
    ['apartment1'] = "South Rockford Drive",
    ["apartment2"] = "Morningwood Blvd",
    ["apartment3"] = "Integrity Way",
    ["apartment4"] = "Tinsel Towers",
    ["apartment5"] = "Fantastic Plaza"
}



RegisterCommand("housingmigrate", function()

    local properties = {}

    local qbApt = MySQL.Sync.fetchAll("SELECT * FROM apartments")

    for i = 1, #qbApt do
        local apt = qbApt[i]

        local aptName = AptNames[apt.type]
        local data = {
            owner_citizenid = apt.citizenid,
            label = aptName .. " Apartment " .. tostring(i),
            description = "This is " .. aptName .. " Apartment " .. tostring(i),
            shell = Config.Apartments[aptName].shell,
            apartment = aptName,
        }
    end

    local qbHouses = MySQL.Sync.fetchAll("SELECT * FROM houses")





end, true)