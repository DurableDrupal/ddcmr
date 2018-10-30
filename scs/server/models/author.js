var mongoose = require('./db')
var MetaData = require('./base-content-attributes/meta-data').MetaData
var Media = require('./base-content-attributes/media').Media
var Link = require('./base-content-attributes/link').Link
var Text = require('./base-content-attributes/text').Text
var Person = require('./domain-content-attributes/person').Person
var Tag = require('./base-content-attributes/tag').Tag

var authorSchema = mongoose.Schema({
  idLegacy: Number,
  metaData: MetaData.schema,
  authorPersonalInfo: Person.schema,
  authorAbout: Text.schema, 
  authorBio: Text.schema, 
  authorBanner: Media.schema,
  authorLogo: Media.schema,
  authorGallery: [Media.schema],
  authorTwitter: Link.schema,
  authorFacebook: Link.schema,
  authorYouTube: Link.schema,
  authorWebsite: Link.schema,
  authorBlog: Link.schema,
  tags: [Tag.schema]
})
 
exports.Author = mongoose.model('Author', authorSchema)
