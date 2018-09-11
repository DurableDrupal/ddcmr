var mongoose = require('./db')
var MetaData = require('./base-content-attributes/meta-data').MetaData
var Tag = require('./base-content-attributes/tag').Tag
var Text = require('./base-content-attributes/text').Text

var caseStudySchema = mongoose.Schema({
  idLegacy: Number,
  metaData: MetaData.schema,
  articles: [{ weight: Number, article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article'} }],
  caseStudySummary: Text.schema,
  caseStudyDescription: Text.schema,
  tags: [Tag.schema]
})

exports.CaseStudy = mongoose.model('CaseStudy', caseStudySchema)
