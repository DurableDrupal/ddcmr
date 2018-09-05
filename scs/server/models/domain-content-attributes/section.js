var mongoose = require('../db')
var Media = require('../base-content-attributes/media').Media
var Text = require('../base-content-attributes/text').Text
var Tag = require('../base-content-attributes/tag').Tag

 // just complicates things, unless found to be absolutely necessary

var sectionSchema = mongoose.Schema({
  sectionSlug: String,
  sectionTitle: String,
  sectionSubTitle: String,
  author: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Author'} ],
  // sectionFrontMatter: [ { weight: Number, value: Text.schema } ],
//   sectionChapters: [ { weight: Number, type: mongoose.Schema.Types.ObjectId, ref: 'Chapter'} ],
  tags: [Tag.schema]
})
 
exports.Section = mongoose.model('Section', sectionSchema)

