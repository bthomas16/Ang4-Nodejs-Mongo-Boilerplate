const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  username: {type: String, required:true, unique: true},
  firstname: {type: String, required:true},
  lastname: {type: String, requied: true},
  password: {type: String, requried: true},
  email: {type: String, requried: true},
  locations: {type: String, required: true},
  background: {type: String, required: true},
  experienceYears: {type: Number, required: true},
  handicap: {type: Number, required: true},
  bestFor: {type: String, required: true},
  price: {type: Number, required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Master', schema)
