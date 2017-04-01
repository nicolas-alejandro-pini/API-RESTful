var router = require('express').Router();
var passport = require('passport');
var auth = require('../auth');
var mongoose = require('mongoose');
var City = mongoose.model('City');

// Get cities
router.get('/cities', auth.optional, function(req, res, next){
  var query = {};

  return Promise.all([
      City.find(query)
        .sort({ name : 'desc' })
        .exec(),
      City.count(query).exec()
    ]).then(function(results){
      var cities = results[0];
      var citiesCount = results[1];

      return res.json({
        cities : cities,
        citiesCount : citiesCount
      });
  }).catch(next);
});

// Add new city
router.post('/city', auth.required, function(req, res, next){
  var city = new City({ name : req.body.city.name, country : req.body.city.country });

  city.save().then(function(){
    return res.json({ city : city.toJSON() });
  }).catch(next);
});

module.exports = router;
