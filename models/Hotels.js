var mongoose = require('mongoose');

var HotelSchema = new mongoose.Schema({
  name: String,
  stars: {type: Number, default: 0},
  city: { type: mongoose.Schema.Types.ObjectId, ref: 'City' },
  price: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});
mongoose.model('Hotel', HotelSchema);
