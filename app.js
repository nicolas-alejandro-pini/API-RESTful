var fs = require('fs');
var http = require('http');
var path = require('path');
// var methods = require('methods');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var passport = require('passport');
var errorhandler = require('errorhandler');
var mongoose = require('mongoose');
var logger = require('morgan');
var favicon = require('serve-favicon');

var isProduction = process.env.NODE_ENV === 'production';

// Create global app object
var app = express();
app.use(cors());

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'almundo', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));

if (!isProduction) {
  app.use(errorhandler());
}

if(isProduction){
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://localhost/almundo');
  mongoose.set('debug', true);
}

// Esquemas de mongoDB
require('./models/User');
require('./models/Hotels');
require('./models/Comments');
require('./models/City');
require('./models/Room');
require('./config/passport');

// Routing
app.use(require('./routes'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
// Para desarrollo error handler imprime el stacktrace
if(!isProduction){
  app.use(function(err, req, res, next){
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({'errors': {
      message: err.message,
      error: err
    }});
  });
}

// Para produccion error handler no filtra el stacktrace al usuario
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({'errors': {
    message: err.message,
    error: {}
  }});
});

var server = app.listen( process.env.PORT || 3000, function(){
  console.log('Listening on port ' + server.address().port);
});
