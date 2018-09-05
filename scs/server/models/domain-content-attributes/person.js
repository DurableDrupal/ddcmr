var mongoose = require('../db')
var Location = require('../base-content-attributes/location').Location
var Tag = require('../base-content-attributes/tag').Tag
var Media = require('../base-content-attributes/media').Media
var Phone = require('./phone').Phone

var personSchema = mongoose.Schema({
  gender: String,
  name: {
    title: String,
    first: String,
    middle: String,
    maternal: String,
    paternal: String,
    last: String,
  },
  location: Location.schema,
  phones: [Phone.schema],
  email: String,
  login: {
    username: String,
    password: String
  },
  birthday: Date,
  avatar: Media.schema,
  tags: [Tag.schema]
})

exports.Person = mongoose.model('Person', personSchema)
