var mongoose = require('mongoose')


// Change example here to table name
var taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    desc: {type: String, required: true},
    completed: {type: Boolean, default: false},

    // Example of a relationship to another table
    relationship: [{type: Schema.Types.ObjectId, ref: 'Relation_Table'}],
});

// Change example here too
var Example = mongoose.model('Example', exampleSchema);