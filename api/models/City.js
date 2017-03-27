var mongoose = require('mongoose');

var CitySchema = new mongoose.Schema({
  name: String,
  country: String
});

mongoose.model('City', CitySchema);
