const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: String
})

console.log(__filename.split(__dirname+"/").pop())

module.exports = mongoose.model('userModel', schema)
