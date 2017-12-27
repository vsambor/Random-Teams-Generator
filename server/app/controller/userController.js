const userModel = App.model('userModel')
const bcrypt = require('bcryptjs');

exports.add = (req, res) => {
  let newUser = new userModel({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    isActive: req.body.isActive
  })

  newUser.save(newUser)
    .then(() => {
      res.json(201, newUser)
    })
    .catch((err) => {
      console.error('Error saving: ' + err)
      res.end('Error: ' + err);
    })
}

exports.findAll = (req, res) => {
  userModel.find({})
    .then(result => res.status(200).send(result))
    .catch(err => console.error('There was an error' + err))
}

exports.findById = (req, res) => {
  userModel.findById(req.params.id)
    .then(result => res.status(200).send(result))
    .catch(err => console.error('There was an error' + err))
}

exports.findByName = (req, res) => {
  userModel.findOne({ name: req.params.name })
    .then(result => res.status(200).send(result))
    .catch(err => console.error('There was an error' + err))
}
