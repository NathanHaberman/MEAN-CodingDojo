var mongoose = require('mongoose');
var Dog = mongoose.model('Dog');

// Require controller file
var dogs = require('../controllers/dogs.js');

module.exports = function(app){

    app.get('/', function(req,res){
        // Calling the key from the object in the controller file
        dogs.index(req,res);
    });

    app.get('/dogs/new', function(req,res){
        // If not talking to database just render in routes.js
        res.render('new_animal');
    });

    app.post('/dogs', function(req,res){
        dogs.create(req,res);
    });

    app.get('/dogs/:id', function(req,res){
        dogs.profile(req,res);
    });

    app.get('/dogs/edit/:id', function(req,res){
        dogs.edit(req,res);
    });

    app.post('/dogs/:id', function(req,res){
        dogs.update(req,res);
    });

    app.post('/dogs/destroy/:id', function(req,res){
        dogs.destroy(req,res);
    });
};