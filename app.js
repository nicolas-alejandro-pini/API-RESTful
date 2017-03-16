'use strict'
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Hotel = require('./api/models/todoListModel');
var routes = require('./api/routes/todoListRoutes');

var app = express();
var port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes(app);

app.listen(port);
console.log('Server started on: ' + port);
