// Requiring Express and Path
var express = require('express');
var path = require('path');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './client/static')));
// Setting our Views Folder Directory and EJS
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// This is DB stuff, check this file out
require('./server/config/mongoose.js')


var routeSetter = require('./server/config/routes.js');
routeSetter(app);

// Listen for whatever port you want
app.listen(6677, function(){
    console.log('//')
    console.log('Port 6677');
    console.log('//')
});