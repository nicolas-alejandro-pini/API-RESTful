var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var CitySchema = new mongoose.Schema({
  name: { type: String, lowercase: true, unique: true},
  country: { type: String, lowercase: true}
}, {timestamps: true, collection: 'city' });

CitySchema.plugin(uniqueValidator, { message: 'La ciudad ya existe'});

CitySchema.methods.toJSON = function(){
  return {
    name: this.name,
    country: this.country
  };
};

mongoose.model('City', CitySchema);
