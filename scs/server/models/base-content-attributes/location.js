var mongoose = require('../db')
var GeoPoint = require('./geo-point').GeoPoint

var locationSchema = mongoose.Schema({
  name: String,
  street1: String,
  street2: String,
  city: String,
  stateProvince: String,
  postcode: String,
  country: String,
  timezone: String,
  coordinates: GeoPoint.schema
})

exports.Location = mongoose.model('Location', locationSchema)
