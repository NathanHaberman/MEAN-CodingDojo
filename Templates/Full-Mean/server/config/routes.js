var mongoose = require('mongoose');
// Change examples to your controllers
var examples = require('../controllers/examples.js')

module.exports = function(app){

    app.get('/api/test', function(req,res){
         res.json({test: "success"});
    });

    // Change examples here as well
    // Also change the method attached to your method from your controller
    app.get('/api/', function(req,res){
        examples.index(req,res);
    });

    app.post('/api/', function(req,res){
        examples.create(req,res);
    });


    app.all("*", (req,res,next) => {
        // Change name of angular file, in this case frontEnd
        res.sendFile(path.resolve("./frontEnd/dist/index.html"))
    });
};