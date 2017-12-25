const env = process.env.NODE_ENV || 'development'
const packageJson = require('../package.json')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const path = require('path')

console.log(`Loading App in ${env} mode.`)

global.App = {
  env: env,
  app: express(),
  version: packageJson.version,
  port: process.env.PORT || 8081,
  config: require("./config")[env],
  root: __dirname + "/..",
  appPath: path => App.root + "/" + path,
  require: path => require(App.appPath(path)),
  controller: path => App.require("app/controller/" + path),
  service: path => App.require("app/service/" + path),
  model: path => App.require("app/model/" + path),
  util: path => App.require("app/util/" + path),
  presenter: path => App.require("app/presenters/" + path),
  start: () => {
    if (!App.started) {
      App.started = true
      App.app.listen(App.port)
      console.log(`Running App Version ${App.version} on port ${App.port} in ${App.env} mode`)
    }
  }
}

if (!App.config) {
  console.log(`ERROR: No config specified for ${env} environment.`)
  process.exit(1)
}

// Midlewares
App.app.use(favicon(path.join(__dirname, '../public/images', 'favicon.ico')))
App.app.use(cors());
App.app.use(bodyParser.json())

// Bootstrap the routes.
App.require("config/routes")(App.app)

// Connects to the database.
App.require("config/database.js")(process.env.DATABASE_URL || App.config.db.url)