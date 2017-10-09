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
mongoose.connect('mongodb://localhost/mongoose_dashboard');


// Blueprint for collection
var dogSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, min: 1, max: 20},
    breed: {type: String, required: true},
});

// Use bluprint to make a collection
mongoose.model('Dog', dogSchema);
var Dog = mongoose.model('Dog');

app.get('/', function(req,res){
    Dog.find({}, function(error, dogs){
        if (error){
            res.redirect('/dogs/new');
        } else {
            res.render('index', {dogs: dogs});
        }
    });
});

app.get('/dogs/new', function(req,res){
    res.render('new_animal');
});

app.post('/dogs', function(req,res){
    var newDog = new Dog();
    newDog.name = req.body.name;
    newDog.age = req.body.age;
    newDog.breed = req.body.breed;

    newDog.save(function(error){
        if (error){
            res.redirect('/dogs/new');
        } else {
            res.redirect('/');
        }
    });
});

app.get('/dogs/:id', function(req,res){
    Dog.findOne({_id: req.params.id}, function(error,dog){
        if (error){
            res.redirect('/');
        } else {
            res.render('animal_page', {dog: dog});
        }
    });
});

app.get('/dogs/edit/:id', function(req,res){
    Dog.findOne({_id: req.params.id}, function(error,dog){
        if (error){
            res.redirect('/');
        } else {
            res.render('update_animal', {dog: dog});
        }
    });
});

app.post('/dogs/:id', function(req,res){
    Dog.findOne({_id: req.params.id}, function(error,dog){
        if (error){
            res.redirect('/');
        } else {
            if (req.body.name){
                dog.name = req.body.name;
            }
            if (req.body.age){
                dog.age = req.body.age;
            }
            if (req.body.breed){
                dog.breed = req.body.breed;
            }
            dog.save(function(error){
                if (error){
                    res.redirect('/')
                } else {
                    res.redirect('/dogs/' + req.params.id)
                }
            });
        }
    });
});

app.post('/dogs/destroy/:id', function(req,res){
    Dog.remove({_id: req.params.id}, function(error){
        res.redirect('/');
    })
});


// Listen for whatever port you want
app.listen(6677, function(){
    console.log('Port 6677');
});