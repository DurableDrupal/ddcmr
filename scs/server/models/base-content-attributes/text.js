var mongoose = require('../db')

var textSchema = mongoose.Schema({
  label: String,
  value: String,
  help: String,
  type: String
})

exports.Text = mongoose.model('Text', textSchema)
