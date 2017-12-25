const teamModel = App.model('teamModel')

exports.add = (req, res) => {
  let newTeam = new teamModel({
    name: req.body.name,
    result: req.body.result
  })

  newTeam.save(newTeam)
    .then(() => {
      res.json(201, newTeam)
    })
    .catch((err) => {
      console.error('Error saving: ' + err)
      res.end('Error saving: ' + err);
    })
}

exports.findAll = (req, res) => {
  teamModel.find({})
    .then(result => res.status(200).send(result))
    .catch(err => console.error('There was an error' + err))
}

exports.findById = (req, res) => {
  teamModel.findById(req.params.id)
    .then(result => res.status(200).send(result))
    .catch(err => console.error('There was an error' + err))
}

exports.findByName = (req, res) => {
  teamModel.findOne({ name: req.params.name })
    .then(result => res.status(200).send(result))
    .catch(err => console.error('There was an error' + err))
}
