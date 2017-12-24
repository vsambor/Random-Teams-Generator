const userModel = App.model('userModel')

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
