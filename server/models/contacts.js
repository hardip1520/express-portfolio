let mongoose = require('mongoose');
let contactModel = mongoose.Schema({
    name: String,
    email: String,
    Phnumber: Number
},
    {
        collection: "contacts"
    });

module.exports = mongoose.model('contact', contactModel);