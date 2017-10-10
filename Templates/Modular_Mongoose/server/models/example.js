var mongoose = require('mongoose')

// For table relationships
var Schema = mongoose.Schema;

// Change example here to table name
var exampleSchema = new mongoose.Schema({
    example: {type: String, required: true},

    // Example of a relationship to another table
    relationship: [{type: Schema.Types.ObjectId, ref: 'Relation_Table'}],
});

// Change example here too
var Example = mongoose.model('Example', exampleSchema);