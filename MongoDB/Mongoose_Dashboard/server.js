// Requiring Express
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Requiring Mongoose
var mongoose = require('mongoose');
// Require path
var path = require('path');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './client/static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './client/views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// Require each model in your models folder
require('./server/config/models/dog.js')

// CHANGE THE DB NAME!!!!
mongoose.connect('mongodb://localhost/mongoose_dashboard');


// Require route file
var routesSetter = require('./server/config/routes.js');
// Pass ap into route file
routesSetter(app);



// Listen for whatever port you want
app.listen(6677, function(){
    console.log('Port 6677');
});