'use strict'
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Hotel = require('./api/models/todoListModel');
var routes = require('./api/routes/todoListRoutes');

var app = express();
var port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test', function(err){
  if(err)
    console.log(err);
  else
    console.log('Connected to //localhost/test');
});

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Middleware intercepts incomming http request
app.use(function(req,res){
  res.status(404).send({url: req.originalUrl + ' not found'});
});

routes(app);

app.listen(port);
console.log('Server started on: ' + port);
