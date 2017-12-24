module.exports = (app) => {
  var homeController = App.controller('homeController')
  app.get('/', homeController.index)
  app.get('/users', homeController.getAllUsers)
}
