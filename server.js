// Initialize Express app
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Get Database
const db = require('./data/database')

// Import data from .env file
require('dotenv').config();

// Start App
const port = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json())

db.InitializeDB((err, db) => {
  if (err) {
    console.log(err.message)
    return
  }
  console.log('Database Initialized.')

  // Routes
  app.use('/', require('./routes/HomeRoutes'))
  app.use('/contacts', require('./routes/ContactsRoutes'))

  app.listen(port, () => {
    console.log("App started on http://localhost:" + port);
  })
})