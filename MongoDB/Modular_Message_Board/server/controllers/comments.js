var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

module.exports = {

    create: function(req,res){
        Message.findOne({_id: req.params.messageid}, function(error,message){
            var newComment = new Comment();
            newComment.name = req.body.name;
            newComment.comment = req.body.comment;
            newComment._message = message._id;
            newComment.save(function(error){
                message.comments.push(newComment);
                message.save(function(error){
                    res.redirect('/');
                });
            });
        });
    },



};