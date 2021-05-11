const mongoose = require('mongoose');
const moment = require('moment');

const { Schema } = mongoose;

const loveItsSchema = new Schema({
    text: {
        type: String,
        minLength: 1,
        maxLength: 400,

    },
    toUser: [{
      type: Schema.Types.ObjectId,
      ref: 'user',  
    }],
    fromUser: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now,
        get: timestamp => moment(timestamp).format('MM DO, YY [at] hh:mm a')
    },
    seen: [{
      by: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }
    }]
},
{
    toJSON: {
        getters: true
    }
}
);

