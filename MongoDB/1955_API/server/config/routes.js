var mongoose = require('mongoose');
// Chnage examples to your controllers
var names = require('../controllers/names.js')

module.exports = function(app){

    // Change examples here as well
    // Also change the method attached to your method from your controller
    app.get('/', function(req,res){
        names.index(req,res);
    });

    app.get('/new/:name', function(req,res){
        names.create(req,res);
    });

    app.get('/remove/:name', function(req,res){
        names.remove(req,res);
    });

    app.get('/:name', function(req,res){
        names.getOne(req,res);
    });

};