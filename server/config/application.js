const env = process.env.NODE_ENV || 'development'
const packageJson = require('../../package.json')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compress = require('compression')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const path = require('path')

console.log(`Loading App in ${env} mode.`)

global.App = {
  env: env,
  app: express(),
  version: packageJson.version,
  port: process.env.PORT || 8081,
  config: require('./config')[env],
  root: path.join(__dirname, '..'),
  appPath: path => App.root + '/' + path,
  require: path => require(App.appPath(path)),
  util: path => App.require('src/util/' + path),
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
App.app.use(cors())
App.app.use(helmet())
App.app.use(compress())
App.app.use(bodyParser.json())
App.app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')))

// Bootstrap the routes.
App.require('config/routes')(App.app)

// Connects to the database.
App.require('config/database.js')(process.env.DATABASE_URL || App.config.db.url)
