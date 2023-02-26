let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//create a reference to the db Schema which is the model
let Contact = require('../models/contacts');

//we want to display the Contact
module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render('contact/list', { title: 'Contacts', ContactList: contactList,displayName:req.user?req.user.displayName:'' });
        }
    });
}
module.exports.displayAddContact = (req, res, next) => {
    res.render('contact/add',{title:'Add Contact',displayName:req.user?req.user.displayName:''})
}

module.exports.processAddContact = (req, res, next) => {
    let newContact = Contact({
        "name": req.body.name,
        "email": req.body.email,
        "Phnumber": req.body.Phnumber
    });
    Contact.create(newContact, (err, Contact) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contactList');
        }
    });
}

module.exports.displayEditContact = (req, res, next) => {
    let id = req.params.id;
    Contact.findById(id, (err, contactToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('contact/edit', { title: 'Edit Contact', contact: contactToEdit,displayName:req.user?req.user.displayName:'' });
        }
    });
}

module.exports.processEditContact = (req, res, next) => {
    let id = req.params.id
    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "email": req.body.email,
        "Phnumber": req.body.Phnumber
    });
    console.log('req.body.Contactnumber' , req.body)
    Contact.updateOne({ _id: id }, updatedContact, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contactList');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    Contact.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contactList');
        }
    });
}