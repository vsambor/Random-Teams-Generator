const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: {
    type: String,
    required: 'Name is required',
    unique: true
  },
  result: { type: String }
}, { timestamps: {} })

module.exports = mongoose.model('team', schema)
