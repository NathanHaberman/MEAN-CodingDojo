var mongoose = require('mongoose');
var bcrypt = require('bcrypt')

var User = mongoose.model('User');

module.exports = {

    register: function(req,res){
        var newUser = new User();
        newUser.first_name = req.body.first_name;
        newUser.last_name = req.body.last_name;
        newUser.email = req.body.email;
        newUser.birthday = req.body.birthday;
        newUser.password = req.body.password;
        
        if (req.body.password === req.body.confirm_password){
            newUser.save(function(error){
                if (error){
                    console.log('//')
                    console.log('Save Error')
                    console.log('//')
                    res.redirect('/')
                } else {
                    res.redirect('/success')
                }
            });
        } else {
            console.log('//')
            console.log("Passwords don't match")
            console.log('//')
            res.redirect('/');
        }
    },

    login: function(req,res){
        User.findOne({email: req.body.email})
        .then(function(user){
            bcrypt.compare(req.body.password, user.password)
            .then(function(match){
                if (match) {
                    console.log('//')
                    console.log('Login Success')
                    console.log('//')
                    res.redirect('/success');
                } else {
                console.log('//')
                console.log('Password does not match')
                console.log('//')
                res.redirect('/');
                }
            });
        })
        .catch(function(error){
            console.log('//')
            console.log('Email not found')
            console.log('//')
            res.redirect('/');
        })
    },




};