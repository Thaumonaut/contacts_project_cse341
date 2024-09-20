const express = require('express')
const route = express.Router();
const contacts = require('../controller/ContactsController')


route.get('/', contacts.getAllContacts)
route.get('/:id', contacts.getContactById)

module.exports = route;