var mongoose = require('mongoose')

// For table relationships
var Schema = mongoose.Schema;

// Blueprint for collection
var commentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    name: {type: String, required: true},
    comment: {type: String, required: true},
});

var Comment = mongoose.model('Comment', commentSchema);