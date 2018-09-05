var mongoose = require('../db')
var Link = require('./link').Link

var mediaSchema = mongoose.Schema({
  idLegacy: Number,
  mediaLink: Link.schema,
  mediaCaption: String,
  mediaCredits: String,
  mediaWidth: String,
  mediaHeight: String,
  mediaMime: String,
  mediaSize: Number,
  mediaType: String
})

exports.Media = mongoose.model('Media', mediaSchema)