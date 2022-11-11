const mongoose = require('mongoose');

const schema = mongoose.Schema({
    Name:{
        type: String,
        required: true
    },Age: {
        type: Number,
        required: true
    },City:{
        type: String,
        required: true
    }, createdDate:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Innovation', schema);