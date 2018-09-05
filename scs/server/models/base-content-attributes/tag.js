var mongoose = require('../db')

var tagSchema = mongoose.Schema({
    idLegacy: Number,
    tagSlug: String,
    tagName: String,
    vocabIdLegacy: Number,
    vocabSlug: String,
    vocabName: String
})

exports.Tag = mongoose.model('Tag', tagSchema)
