module.exports = (app) => {

  // Index routes.
  const homeController = App.controller('homeController')
  app.get('/', homeController.index)

  // Member routes.
  const memberController = App.controller('memberController')
  app.post('/api/member', memberController.add)
  app.get('/api/members', memberController.findAll)
  app.get('/api/member/:id', memberController.findById)
  app.get('/api/member/:name', memberController.findByName)

  // Team routes.
  const teamController = App.controller('teamController')
  app.post('/api/team', teamController.add)
  app.get('/api/teams', teamController.findAll)
  app.get('/api/team/:id', teamController.findById)
  app.get('/api/team/:name', teamController.findByName)

  // Handles non existing routes i.e 404.
  app.use((req, res) => res.status(404).send({url: req.originalUrl + ' not found'}))
}
