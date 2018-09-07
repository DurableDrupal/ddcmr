var mongoose = require('./db')
var MetaData = require('./base-content-attributes/meta-data').MetaData
var Media = require('./base-content-attributes/media').Media
var Tag = require('./base-content-attributes/tag').Tag
var Text = require('./base-content-attributes/text').Text

var videoSchema = mongoose.Schema({
  idLegacy: Number,
  metaData: MetaData.schema,
  author: [{type: mongoose.Schema.Types.ObjectId, ref: 'Author'}],
  videoMedia: Media.schema,
  videoImage: Media.schema,
  videoDescription: Text.schema,
  videoSummary: Text.schema,
  tags: [Tag.schema]
})
 
exports.Video = mongoose.model('Video', videoSchema)
