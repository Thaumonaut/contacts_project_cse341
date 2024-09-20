const express = require('express')
const route = express.Router();

const mongodb = require('../data/database')

route.get('/', (req, res) => {
  res.send('API Home route. Go to /api/contacts to see all contacts.')
})

module.exports = route;