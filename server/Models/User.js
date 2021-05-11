const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    loveIts: [{
        type: Schema.Types.ObjectId,
        ref: 'love-its'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
    // Might add a friend code instead of using id's or usernames to find each other, so it feels like a phone number or nintendo's Friend code system.

});

// add bcrypt for password security.
// add function to test if password is correct when bcrypt is implimented.

const User = model('User', userSchema)

module.exports = User