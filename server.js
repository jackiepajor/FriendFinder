// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Configure Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Data parsing with bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// Routing - point server to api-routes.js and html-routes.js files
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// Listener - Start Server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});