var mongoose = require('mongoose');
// Chnage examples to your controllers
var examples = require('../controllers/examples.js')

module.exports = function(app){

    // Change examples here as well
    // Also change the method attached to your method from your controller
    app.get('/', function(req,res){
        examples.index(req,res);
    });

    app.post('/', function(req,res){
        examples.create(req,res);
    });

};