const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  email: {type: String, requried: true,
   unique: true},
  password: {type: String, requried: true},
  firstname: {type: String},
  lastname: {type: String},
  yearsExp: {type: Number},
  skill1: {type: String},
  skill2: {type: String},
  skill3: {type: String}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Master', schema)
