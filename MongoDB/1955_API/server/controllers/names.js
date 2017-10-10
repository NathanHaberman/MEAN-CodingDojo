var mongoose = require('mongoose');

var Name = mongoose.model('Name');

module.exports = {

    index: function(req,res){
        Name.find({}, function(error,names){
            if (error){
                res.render('Error in getting data');
            } else {
                res.json(names);
            }
        });
    },

    create: function(req,res){
        var newName = new Name();
        newName.name = req.params.name;
        newName.save(function(error){
            res.redirect('/');
        });
    },

    remove: function(req,res){
        Name.remove({name: req.params.name}, function(error){
            res.redirect('/');
        });
    },

    getOne: function(req,res){
        Name.findOne({name: req.params.name}, function(error,name){
            if (error){
                res.redirect('/');
            } else {
                res.json(name);
            }
        })
    },

};