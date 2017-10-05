var express = require('express');
var path = require('path');

var session = require('express-session');

var app = express();
var bodyParser = require('body-parser');

app.use(session({secret: 'Shhh...'}));

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');



app.get('/', function(req, res){
    res.render('index');
});

app.post('/submit', function(req, res){
    console.log(req.body);
    req.session.first_name = req.body.first_name;
    req.session.last_name = req.body.last_name;

    res.redirect('/result');
});

app.get('/result', function(req, res){
    var context = {
        'first_name' : req.session.first_name,
        'last_name' : req.session.last_name,
    }

    res.render('result', context);
});



app.listen(6677, function(){
    console.log('Port 6677');
});