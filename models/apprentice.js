const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  fullname: {type: String, required:true},
  email: {type: String, requried: true, unique: true},
  password: {type: String, requried: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Apprentice', schema);
