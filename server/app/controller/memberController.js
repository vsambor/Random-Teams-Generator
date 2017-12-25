const memberModel = App.model('memberModel')

exports.add = (req, res) => {
  let newMember = new memberModel({
    name: req.body.name,
    email: req.body.email,
    rating: req.body.rating
  })

  newMember.save(newMember)
    .then(() => {
      res.json(201, newMember)
    })
    .catch((err) => {
      console.error('Error saving: ' + err)
      res.end('Error: ' + err);
    })
}

exports.findAll = (req, res) => {
  memberModel.find({})
    .then(result => res.status(200).send(result))
    .catch(err => console.error('There was an error' + err))
}

exports.findById = (req, res) => {
  memberModel.findById(req.params.id)
    .then(result => res.status(200).send(result))
    .catch(err => console.error('There was an error' + err))
}

exports.findByName = (req, res) => {
  memberModel.findOne({ name: req.params.name })
    .then(result => res.status(200).send(result))
    .catch(err => console.error('There was an error' + err))
}

