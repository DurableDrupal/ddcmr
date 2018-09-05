var mongoose = require('./db')
var MetaData = require('./base-content-attributes/meta-data').MetaData
var Media = require('./base-content-attributes/media').Media
var Tag = require('./base-content-attributes/tag').Tag
var Text = require('./base-content-attributes/text').Text

var articleSchema = mongoose.Schema({
  idLegacy: Number,
  metaData: MetaData.schema,
  author: [{type: mongoose.Schema.Types.ObjectId, ref: 'Author'}],
  articlePreTitle: String,
  articleTitle: String,
  articleSubTitle: String,
  articleSummary: Text.schema,
  articleBody: Text.schema,
  articleImages: [Media.schema],
  articleVideos: [Media.schema],
  tags: [Tag.schema],
})
 
exports.Article = mongoose.model('Article', articleSchema)
