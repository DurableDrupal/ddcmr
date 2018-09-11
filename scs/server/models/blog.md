var mongoose = require('./db')
var MetaData = require('./base-content-attributes/meta-data').MetaData
var Tag = require('./base-content-attributes/tag').Tag
var Text = require('./base-content-attributes/text').Text

var blogSchema = mongoose.Schema({
  idLegacy: Number,
  metaData: MetaData.schema,
  author: [{type: mongoose.Schema.Types.ObjectId, ref: 'Author'}],
  blogSummary: Text.schema,
  blogDescription: Text.schema,
  tags: [Tag.schema]
})

exports.Blog = mongoose.model('Blog', blogSchema)
