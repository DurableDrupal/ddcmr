var mongoose = require('../db')

var phoneSchema = mongoose.Schema({
  name: String,
  number: String
})

exports.Phone = mongoose.model('Phone', phoneSchema)
