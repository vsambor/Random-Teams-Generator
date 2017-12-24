module.exports = (app) => {
  

  const homeController = App.controller('homeController')
  app.get('/', homeController.index)

  const userController = App.controller('userController')
  app.get('/api/users', userController.findAll)
  app.get('/api/user/:id', userController.findById)

  app.use((req, res) => res.status(404).send({url: req.originalUrl + ' not found'}))
}
