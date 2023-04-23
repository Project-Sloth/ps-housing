fx_version 'cerulean'

game "gta5"

author "Project Sloth and Xirvin"
version '1.0.0'

lua54 'yes'

-- ui_page 'html/index.html'
ui_page 'http://localhost:3000/' --for dev

dependency 'fivem-freecam'

shared_script {
  "shared/**",
  }

client_script {
  'client/**',
}

server_script {
  "server/**",
  }

files {
  'html/**',
  'starter_shells_k4mb1.ytyp'
}

this_is_a_map 'yes'

data_file 'DLC_ITYP_REQUEST' 'starter_shells_k4mb1.ytyp'