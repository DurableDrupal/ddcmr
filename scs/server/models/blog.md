var mongoose = require('./db')
var MetaData = require('./base-content-attributes/meta-data').MetaData
var Tag = require('./base-content-attributes/tag').Tag

var blogSchema = mongoose.Schema({
  idLegacy: Number,
  metaData: MetaData.schema,
  author: [{type: mongoose.Schema.Types.ObjectId, ref: 'Author'}],
  blogSummary: String,
  blogDescription: String,
  tags: [Tag.schema]
})

exports.Blog = mongoose.model('Blog', blogSchema)
