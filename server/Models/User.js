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
    // Might add a friend code instead of using id's or usernames to find each other, so it feels like a phone number or nintendo's Friend code system.

})