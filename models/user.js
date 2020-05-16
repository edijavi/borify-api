'use strict'
const uri = "mongodb+srv://borify:boream@<borify-l3syr.mongodb.net>/test?retryWrites=true&w=majority";

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var UserSchema = schema({
  name: String,
  surname: String,
  email: String,
  password: String,
  role: String,
  image: String
});

module.exports = mongoose.model('User', UserSchema);