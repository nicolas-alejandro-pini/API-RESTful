var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  token: String,
  bio: String
  // image : null
});
mongoose.model('User', UserSchema);
