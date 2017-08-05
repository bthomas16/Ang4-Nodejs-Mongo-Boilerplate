const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  username: {type: String, required:true, unique: true},
  firstname: {type: String, required:true},
  lastname: {type: String, requied: true},
  password: {type: String, requried: true},
  email: {type: String, requried: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Apprentice', schema);
