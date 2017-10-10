var mongoose = require('mongoose')

var nameSchema = new mongoose.Schema({
    name: {type: String, required: true},
});

var Name = mongoose.model('Name', nameSchema);