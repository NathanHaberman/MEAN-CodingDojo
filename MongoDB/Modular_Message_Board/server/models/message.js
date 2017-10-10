var mongoose = require('mongoose')

// For table relationships
var Schema = mongoose.Schema;

// Blueprint for collection
var messageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    message: {type: String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
});

var Message = mongoose.model('Message', messageSchema);