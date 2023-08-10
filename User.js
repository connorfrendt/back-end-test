const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    favNumber: {
        type: Number
    }
});

module.exports = mongoose.model('User', userSchema);