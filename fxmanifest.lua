fx_version 'cerulean'

game "gta5"

author "Project Sloth and Xirvin"
version '1.0.0'

lua54 'yes'

ui_page 'html/index.html'
-- ui_page 'http://localhost:3000/' --for dev

dependency 'fivem-freecam'

shared_script {
  '@ox_lib/init.lua',
  "shared/**",
  }

client_script {
  '@PolyZone/client.lua',
  '@PolyZone/BoxZone.lua',
  'client/cl_property.lua',
  'client/client.lua',
  'client/modeler.lua',
}

server_script {
  '@oxmysql/lib/MySQL.lua',
  "server/sv_property.lua",
  "server/server.lua",
  }

files {
  'html/**',
  'starter_shells_k4mb1.ytyp'
}

this_is_a_map 'yes'

data_file 'DLC_ITYP_REQUEST' 'starter_shells_k4mb1.ytyp'