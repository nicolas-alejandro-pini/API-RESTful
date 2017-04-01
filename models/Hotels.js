var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var slug = require('slug');

var HotelSchema = new mongoose.Schema({
  slug: {type: String, lowercase: true, unique: true},
  name: {type: String, required: [true, 'name no puede ser nulo']},
  stars: {type: Number, required: [true, 'stars no puede ser nulo']},
  _city: {type: mongoose.Schema.Types.ObjectId, ref: 'City', required: [true, 'city no puede ser nulo']},
  description: {type: String},
  position: [{ latitude: {type: Number}, longitude: {type: Number} }],
  price: {type: Number, default: 0},
  createdBy: { type: String },  // Validar objeto User.method.getUserDescriptionJSON()
  _comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
}, {timestamps: true, collection: 'hotels' });

HotelSchema.plugin(uniqueValidator, {message: 'el nombre ya fue usado'});

HotelSchema.methods.slugify = function() {
  this.slug = slug(this.name) + '-' + (Math.random() * Math.pow(2, 8) | 0).toString(2);
};

HotelSchema.methods.toJSONFor = function() {
  return {
    _id : this._id,
    slug: this.slug,
    name: this.name,
    stars: this.stars,
    _city: this.city,
    description: this.description,
    position: this.position,
    price: this.price,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    createdBy: this.created,
    _comments: this.comments
  }
}

HotelSchema.methods.setPosition = function(position){
  this.position = [0, 0];
}

HotelSchema.pre('validate', function(next){
  this.slugify();

  next();
});

mongoose.model('Hotel', HotelSchema);
