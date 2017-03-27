var mongoose = require('mongoose');

var RoomSchema = new mongoose.Schema({
  room: Number,
  date: Date,
  available: Boolean,
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
});
mongoose.model('Room', RoomSchema);
