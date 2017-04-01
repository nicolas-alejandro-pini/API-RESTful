var router = require('express').Router();
var passport = require('passport');
var mongoose = require('mongoose');
var auth = require('../auth');

var Hotel = mongoose.model('Hotel');
var City = mongoose.model('City');
var User = mongoose.model('User');

// Add a new hotel
router.post('/', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
   if(!user) { return res.sendStatus(401); }

    var hotel = new Hotel();
    hotel.name = req.body.hotel.name;
    hotel.stars = req.body.hotel.stars;
    hotel.description = req.body.hotel.description;
    hotel.setPosition(req.body.hotel.position);
    hotel.price = req.body.hotel.price;
    hotel.createdBy = user.username;

    console.log(req.body.hotel.cityName.toLowerCase());
    City.findOne({ name : req.body.hotel.cityName.toLowerCase() }).then(function(city){
        if(!city) {return res.sendStatus(404); }
        hotel._city = city._id;
    });

    return hotel.save().then(function(){
      console.log(hotel.slug + ' -> ' + hotel.name);
      return res.json({ hotel: hotel.toJSONFor() });
    });
  }).catch(next);
});

// Finding hotels
router.get('/', auth.optional, function(req, res, next){
  var query = {};
  var limit = 20;
  var offset = 0;

  if(typeof req.query.limit !== 'undefined'){
    limit = req.query.limit;
  }

  if(typeof req.query.offset !== 'undefined'){
    offset = req.query.offset;
  }

  if( typeof req.query.tag !== 'undefined'){
    query.tagList = {"$in" : [req.query.tag]};
  }

  Promise.all([
    req.query.city ? City.findOne({city: req.query.city}) : null
  ]).then(function(results){
    var city = results[0];

    if(city){
      query.city = city._id;
    }

    return Promise.all([
      Hotel.find(query)
        .limit(Number(limit))
        .skip(Number(offset))
        .sort({createdAt: 'desc'})
        .populate('city')
        .exec(),
      Hotel.count(query).exec(),
      req.payload ? User.findById(req.payload.id) : null,
    ]).then(function(results){
      var hotels = results[0];
      var hotelsCount = results[1];
      var user = results[2];

      return res.json({
         hotels: hotels.map(function(hotel){
           return hotel.toJSONFor();
         }),
         hotelsCount: hotelsCount
      });
    });
  }).catch(next);
});

// Get more commented hotels
router.get('/:hotel', auth.optional, function(req, res, next) {
    Promise.all([
      req.hotel.populate('comments').execPopulate()
    ]).then(function(results){
      // var hotel = results[0];
      console.log('results: ' + results);
      return res.json({hotel: req.hotel.toJSONFor()});
    }).catch(next);
});

// Parametriza hotel
router.param('hotel', function(req, res, next, id) {
    Hotel.findOne({ slug: slug})
      .populate('comments')
      .then(function(hotel){
        if(!hotel) { return res.sendStatus(404); }

        req.hotel = hotel;

        return next();
      }).catch(next);
});

module.exports = router;
