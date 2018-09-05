var mongoose = require('./db')
var Link = require('./base-content-attributes/link').Link
var Location = require('./base-content-attributes/location').Location
var Media = require('./base-content-attributes/media').Media
var MetaData = require('./base-content-attributes/meta-data').MetaData
var Person = require('./domain-content-attributes/person').Person
var Tag = require('./base-content-attributes/tag').Tag
var Video = require('./video').Video
var Text = require('./base-content-attributes/text').Text

var event = mongoose.Schema({
  idLegacy: Number,
  metaData: MetaData.schema,
  eventName: String,
  eventLocation: Location.schema,
  eventDateStart: Date,
  eventDateFinish: Date,
  eventDescription: Text.schema,
  eventImages: [Media.schema],
  eventVideos: [Video.schema],
  eventContact: Person.schema,
  attendingAuthors: [{type: mongoose.Schema.Types.ObjectId, ref: 'Author'}],
  eventParticipants: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  eventTwitter: Link.schema,
  eventFacebook: Link.schema,
  eventWebsite: Link.schema,
  tags: [Tag.schema]
})
 
exports.Event = mongoose.model('Event', event)
