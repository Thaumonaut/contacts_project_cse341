// Initialize Express app
const express = require('express')
const app = express();

// Get Database
const db = require('./data/database')

// Import data from .env file
require('dotenv').config();


// Routes
app.use('/', require('./routes/HomeRoutes'))
app.use('/api/contacts', require('./routes/ContactsRoutes'))


// Start App
const port = process.env.PORT || 3000;

db.InitializeDB((err, db) => {
  if (err) {
    console.log(err.message)
    return
  }
  console.log('Database Initialized.')
  app.listen(port, () => {
    console.log("App started on http://localhost:" + port);
  })
})