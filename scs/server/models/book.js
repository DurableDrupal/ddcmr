var mongoose = require('./db')
var Link = require('./base-content-attributes/link').Link
var MetaData = require('./base-content-attributes/meta-data').MetaData
var Media = require('./base-content-attributes/media').Media
var Section = require('./domain-content-attributes/section').Section
var Tag = require('./base-content-attributes/tag').Tag
var Text = require('./base-content-attributes/text').Text

var bookSchema = mongoose.Schema({
  idLegacy: Number,
  metaData: MetaData.schema,
  author: [{type: mongoose.Schema.Types.ObjectId, ref: 'Author'}],
  editor: [{type: mongoose.Schema.Types.ObjectId, ref: 'Author'}],
  publisher: {type: mongoose.Schema.Types.ObjectId, ref: 'Publisher'},
  bookTitle: String,
  bookSubTitle: String,
  bookFormat: String,
  bookNumberPages: Number,
  bookLanguage: String,
  bookEdition: String,
  bookDatePublication: Date,
  bookCopyright: String,
  bookCountry: String,
  bookISBN10: String,
  bookISBN13: String,
  bookDimensions: String,
  bookImages: [Media.schema],
  bookDescription: Text.schema,
  bookFrontCover: Media.schema,
  bookBackCover: Media.schema,
  bookFrontMatter: [{ weight: Number, value: Text.schema }],
  bookSections: [{ weight: Number, section: Section.schema}],
  tags: [Tag.schema]
})
 
exports.Book = mongoose.model('Book', bookSchema)

