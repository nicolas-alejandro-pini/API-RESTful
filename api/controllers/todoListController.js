'use strict';

var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotels');

exports.list_all_hotels = function(req, res) {
  Hotel.find({}, function(err, hotel){
    if(err)
      res.send(err);
    res.json(hotel);
  });
};

exports.create_a_hotel = function(req, res) {
  var new_hotel = new Hotel(req.body);
  new_hotel.save(function(err, hotel) {
    if(err)
      res.send(err);
    res.json(hotel);
  });
}

exports.read_a_hotel = function(req, res) {
  Hotel.findById(req.params.hotelId, function(err, hotel){
    if(err)
      res.send(err);
    res.json(hotel);
  });
};

exports.update_a_hotel = function(req, res) {
  Hotel.findOneAndUpdate(req.params.hotelId, req.body, {new: true}, function(err, hotel){
    if(err)
      res.send(err);
    res.json(hotel);
  })
}

exports.delete_a_hotel = function(req, res) {
  Hotel.remove({ _id: req.params.hotelId}, function(err, hotel){
    if(err)
      res.send(err);
    res.json({ message: 'Hotel successfully deleted' });
  });
};
