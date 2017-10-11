var mongoose = require('mongoose');
var users = require('../controllers/users.js')

module.exports = function(app){

    // Change examples here as well
    // Also change the method attached to your method from your controller
    app.get('/', function(req,res){
        res.render('index');
    });
    
    app.get('/success', function(req,res){
        res.render('success');
    });

    app.post('/register', function(req,res){
        users.register(req,res);
    });

    app.post('/login', function(req,res){
        users.login(req,res);
    });

};