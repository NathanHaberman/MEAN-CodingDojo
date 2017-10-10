var mongoose = require('mongoose');
var Message = mongoose.model('Message');

module.exports = {

    index: function(req,res){
        Message.find({})
        .populate('comments')
        .exec(function(error, messages){
            res.render('index', {messages: messages});
        });
    },

    create: function(req,res){
        var newMessage = new Message();
        newMessage.name = req.body.name;
        newMessage.message = req.body.message;
        newMessage.save(function(error){
            res.redirect('/');
        });
    },

    clear: function(req,res){
        Message.remove({}, function(error){
            res.redirect('/');
        });
    },



};