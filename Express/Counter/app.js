// Grabbing Express
var express = require('express');
// Grabbing session from Express
var session = require('express-session');

// Creating Node server from Express
var app = express();

// Starting Session with a secret key
app.use(session({secret: 'Shhh...'}));


// ejs stuff to set up views file
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');



app.get('/', function(req,res){
    if (!req.session.count){
        req.session.count = 0;
    }
    req.session.count++;
    
    var count = [
        {'count' : req.session.count},
    ];
    
    res.render('index', {count: count})
});



app.post('/add_two', function(req,res){
    req.session.count++;

    res.redirect('/');
});



app.post('/reset', function(req,res){
    req.session.count = 0;

    res.redirect('/');
})



app.listen(6677, function(){
    console.log('Running on port 6677');
});