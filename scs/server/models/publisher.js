var mongoose = require('./db')
var MetaData = require('./base-content-attributes/meta-data').MetaData
var Media = require('./base-content-attributes/media').Media
var Link = require('./base-content-attributes/link').Link
var Text = require('./base-content-attributes/text').Text
var Person = require('./domain-content-attributes/person').Person
var Tag = require('./base-content-attributes/tag').Tag

var publisherSchema = mongoose.Schema({
  idLegacy: Number,
  metaData: MetaData.schema,
  publisherOrgInfo: Person.schema,
  publisherDescription: Text.schema,
  publisherTwitter: Link.schema,
  publisherFacebook: Link.schema,
  publisherYouTube: Link.schema,
  publisherWebsite: Link.schema,
  publisherBlog: Link.schema,
  publisherLogo: Media.schema,
  publisherAvatar: Media.schema,
  publisherImages: [Media.schema],
  tags: [Tag.schema]
})
 
exports.Publisher = mongoose.model('Publisher', publisherSchema)

