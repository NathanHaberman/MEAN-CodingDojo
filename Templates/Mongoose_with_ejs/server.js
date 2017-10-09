// Requiring Express
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// Requiring Mongoose
var mongoose = require('mongoose');


// CHANGE THE DB NAME!!!!
mongoose.connect('mongodb://localhost/NAME_OF_DB');


// Blueprint for collection
var Schema = new mongoose.Schema({
});

// Use bluprint to make a collection
mongoose.model('', Schema);
var name_of_schema = mongoose.model('');



// Listen for whatever port you want
app.listen(6677, function(){
    console.log('Port 6677');
});