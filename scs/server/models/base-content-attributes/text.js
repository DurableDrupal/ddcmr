var mongoose = require('../db')

var textSchema = mongoose.Schema({
  label: String,
  value: String,
  help: String,
  maxLines: Number,
  maxLength: Number,
  editor: String
})

exports.Text = mongoose.model('Text', textSchema)
