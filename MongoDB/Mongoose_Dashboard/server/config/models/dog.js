var mongoose = require('mongoose');

// Blueprint for collection
var dogSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, min: 1, max: 20},
    breed: {type: String, required: true},
});

// Use bluprint to make a collection
mongoose.model('Dog', dogSchema);