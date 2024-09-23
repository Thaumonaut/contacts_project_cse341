const express = require('express')
const route = express.Router();
const contacts = require('../controller/ContactsController')


route.get('/', contacts.getAllContacts)
route.get('/:id', contacts.getContactById)

route.post('/', contacts.createContact)
route.delete('/:id', contacts.deleteContact)
route.put('/:id', contacts.updateContact)

module.exports = route;