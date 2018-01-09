const TeamModel = require('./model')
const MemberModel = require('../member/model')

exports.add = (req, res) => {
  let newTeam = new TeamModel({
    name: req.body.name,
    result: req.body.result
  })

  newTeam.save(newTeam)
    .then(() => {
      res.json(201, newTeam)
    })
    .catch((err) => {
      console.error('Error saving: ' + err)
      res.end('Error saving: ' + err)
    })
}

exports.findAll = (req, res) => {
  TeamModel.find({})
    .then(result => res.status(200).send(result))
    .catch(err => console.error('There was an error' + err))
}

exports.findById = (req, res) => {
  TeamModel.findById(req.params.id)
    .then(result => {
      if (result) {
        res.status(200).send(result)
      } else {
        res.status(404).send('Not found')
      }
    })
    .catch(err => console.error('There was an error' + err))
}

exports.update = (req, res) => {
  TeamModel.findOneAndUpdate(req.params.id, req.body, { upsert: true, new: true })
    .then(result => res.status(202).send(result))
    .catch(err => console.error('There was an error' + err))
}

exports.delete = (req, res) => {
  TeamModel.findByIdAndRemove(req.params.id)
    .then(result => res.send({ message: 'removed' }))
    .catch(err => console.error('There was an error' + err))
}

exports.addMember = (req, res) => {
  MemberModel.findById(req.params.memberId)
    .then(result => {
      TeamModel.findByIdAndUpdate(req.params.teamId, { $push: { members: result } }, { safe: true, upsert: true })
        .then(() => res.json(201, result))
        .catch(err => res.status(500).send('Member error: ' + err))
    })
    .catch(err => res.status(500).send('Team error: ' + err))
}

exports.deleteMember = (req, res) => {
  TeamModel.update(req.params.teamId, { $pull: { members: { _id: req.params.teamId } } })
    .then(result => res.send({ message: 'removed' }))
    .catch(err => console.error('There was an error' + err))
}
