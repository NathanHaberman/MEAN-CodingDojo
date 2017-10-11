var mongoose = require('mongoose')
var bcrypt = require('bcrypt')

var userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value){
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
            },
            message: 'Not a vaild email'
        },
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
    },
    birthday: {
        type: Date,
        required: true,
    },

});

userSchema.pre('save', function(done){
    var hash = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10))
        this.password = hash;
        done();
});

var User = mongoose.model('User', userSchema);