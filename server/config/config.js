var configBase = {
  root: require('path').normalize(__dirname + '/..'),
  app: {
    name: "App"
  },
  db: {
    url: 'mongodb://localhost/App'
  }
}

var test = JSON.parse(JSON.stringify(configBase));
//test.db = // test environment db connection information

var production = JSON.parse(JSON.stringify(configBase));
//production.db = // production environment db connection information

module.exports = {
  development: configBase,
  test: test,
  production: production
}
