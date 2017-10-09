// Requiring Express
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// Requiring Mongoose
var mongoose = require('mongoose');


// CHANGE THE DB NAME!!!!
mongoose.connect('mongodb://localhost/message_board');


// For table relationships
var Schema = mongoose.Schema;

// Blueprint for collection
var messageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    message: {type: String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
});

var commentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    name: {type: String, required: true},
    comment: {type: String, required: true},
});

// Use bluprint to make a collection
mongoose.model('Message', messageSchema);
var Message = mongoose.model('Message');

mongoose.model('Comment', commentSchema);
var Comment = mongoose.model('Comment');

app.get('/', function(req,res){
    Message.find({})
    .populate('comments')
    .exec(function(error, messages){
        console.log(messages[0]);
        res.render('index', {messages: messages});
    });
});

app.post('/message', function(req,res){
    var newMessage = new Message();
    newMessage.name = req.body.name;
    newMessage.message = req.body.message;
    newMessage.save(function(error){
        res.redirect('/');
    });
});

app.post('/comment/:messageid', function(req,res){
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
});

app.post('/clear', function(req,res){
    Message.remove({}, function(error){
        res.redirect('/');
    });
});

// Listen for whatever port you want
app.listen(6677, function(){
    console.log('Port 6677');
});