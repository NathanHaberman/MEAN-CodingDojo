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


var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quotes');

var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true},
    quote: {type: String, required: true},
});

mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');

app.get('/', function(req,res){
    res.render('index');
});

app.post('/quotes', function(req,res){
    var quoteInstance = new Quote();
    quoteInstance.name = req.body.name;
    quoteInstance.quote = req.body.quote;
    quoteInstance.save(function(error){
        if (error){
            res.redirect('/');
        }
        else{
            res.redirect('/quotes');
        }
    });
});

app.get('/quotes', function(req,res){

    // Get all quotes!
    Quote.find({}, function(error, quotes){
        if(error){
            res.render('index');
        } else {
            res.render('quotes', {quotes: quotes});
        }
    });

});

app.listen(6677, function(){
    console.log('Port 6677');
});