const express = require('express')
const route = express.Router();
const {getAllContacts, getContactById, createContact, deleteContact, updateContact} = require('../controller/ContactsController')

route.get('/', getAllContacts)
route.get('/:id', getContactById)

route.post('/', createContact)
route.delete('/:id', deleteContact)
route.put('/:id', updateContact)

module.exports = route;