var mongoose = require('./db')
var MetaData = require('./base-content-attributes/meta-data').MetaData
var Media = require('./base-content-attributes/media').Media
var Tag = require('./base-content-attributes/tag').Tag
var Text = require('./base-content-attributes/text-field').Text

var assetSchema = mongoose.Schema({
  idLegacy: Number,
  metaData: MetaData.schema,
  author: [{type: mongoose.Schema.Types.ObjectId, ref: 'Author'}],
  assetMedia: Media.schema,
  assetSummary: Text.schema,
  tags: [Tag.schema]
})
 
exports.Asset = mongoose.model('Asset', assetSchema)
