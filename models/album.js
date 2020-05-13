'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var AlbumSchema = schema({
  tittle: String,
  description: String,
  year: String,
  image: String,
  artist: {type: schema.ObjectId, ref: 'Artist'}

});

module.exports = mongoose.model('Album', AlbumSchema);