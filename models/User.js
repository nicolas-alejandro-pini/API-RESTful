var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config').secret;

var UserSchema = new mongoose.Schema({
  username: {type: String, lowercase: true, unique: true, required: [true, 'Campo requerido'], match: [/^[a-zA-Z0-9]+$/, 'Es invalido'], index: true},
  email: {type: String, lowercase: true, unique: true, required: [true, 'Campo requerido'], match: [/\S+@\S+\.\S+/, 'Es invalido'], index: true},
  bio: String,
  image: String,
  hash: String,
  salt: String,
  // TODO quitar password y token
  password: String,
  token: String
}, {timestamps: true});

UserSchema.plugin(uniqueValidator, {message: 'Ya existe.'});

UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function(password){
  var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.generateJWT = function() {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000),
  }, secret);
}

UserSchema.methods.toAuthJSON = function(){
  return {
    username: this.username,
    email: this.email,
    token: this.generateJWT()
  };
};

mongoose.model('User', UserSchema);
