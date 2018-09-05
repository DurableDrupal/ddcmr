var mongoose = require('../db')

var linkSchema = mongoose.Schema({
  idLegacy: Number,
  uriLegacy: String,
  linkUrl: String,
  linkFilePath: String,
  linkAttributes: [{
    attrName: String,
    attrValue: String
  }]
})

exports.Link = mongoose.model('Link', linkSchema)