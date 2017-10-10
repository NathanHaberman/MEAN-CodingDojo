// Controller talks to the DB
var mongoose = require('mongoose');
var Dog = mongoose.model('Dog');

// Export file as an object
module.exports = {
    index: function(req,res){
        Dog.find({}, function(error, dogs){
            if (error){
                res.redirect('/dogs/new');
            } else {
                res.render('index', {dogs: dogs});
            }
        });
    },

    create: function(req,res){
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
    },

    profile: function(req,res){
        Dog.findOne({_id: req.params.id}, function(error,dog){
            if (error){
                res.redirect('/');
            } else {
                res.render('animal_page', {dog: dog});
            }
        });
    },

    edit: function(req,res){
        Dog.findOne({_id: req.params.id}, function(error,dog){
            if (error){
                res.redirect('/');
            } else {
                res.render('update_animal', {dog: dog});
            }
        });
    },

    update: function(req,res){
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
    },

    destroy: function(req,res){
        Dog.remove({_id: req.params.id}, function(error){
            res.redirect('/');
        })
    },


};