const mongoose = require('mongoose');
const moment = require('moment');

const { Schema } = mongoose;

const loveItsSchema = new Schema({
    text: {
        type: String,
        maxLength: 300,
    },
    toUser: [{
      type: Schema.Types.ObjectId,
      ref: 'user',  
    }],
    fromUser: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    created: {
        type: Date,
        default: Date.now
    },
    seen: Date,
});