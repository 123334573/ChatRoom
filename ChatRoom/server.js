'use strict';
var port = process.env.PORT || 1337;

var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

// Allows you to set port in the project properties.
app.set('port', port);

var server = app.listen(app.get('port'), function () {
    console.log('listening');
});
