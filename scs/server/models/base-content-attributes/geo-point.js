var mongoose = require('../db')

var geoPointSchema = mongoose.Schema({
    latitude: Number,
    longitude: Number,
})

exports.GeoPoint = mongoose.model('GeoPoint', geoPointSchema)