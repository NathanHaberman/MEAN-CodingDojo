var mongoose = require('mongoose')

// Change example here to table name
var playerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    position: {type: String},
    status: {type: Object, required: true, default: ['undecided','undecided','undecided']}
});

// Change example here too
var Player = mongoose.model('Player', playerSchema);