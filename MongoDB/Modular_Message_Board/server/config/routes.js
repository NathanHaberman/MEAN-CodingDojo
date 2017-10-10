var mongoose = require('mongoose');
var messages = require('../controllers/messages')
var comments = require('../controllers/comments')

module.exports = function(app){

    app.get('/', function(req,res){
        messages.index(req,res);
    });

    app.post('/message', function(req,res){
        messages.create(req,res);
    });

    app.post('/comment/:messageid', function(req,res){
        comments.create(req,res);
    });

    app.post('/clear', function(req,res){
        messages.clear(req,res);
    });

};