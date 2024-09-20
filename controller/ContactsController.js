const mongodb = require('../data/database')

const getAllContacts = (req, res) => {
  const db = mongodb.getDatabase()
  db.collection('contacts').find().toArray().then((data) => {
    res.json(data)
  })
}

const getContactById = (req, res) => {
  const db = mongodb.getDatabase()
  db.collection('contacts').findOne({_id: parseInt(req.params.id)}).then((data) => {
    res.json(data)
  })
}

module.exports = {
  getAllContacts,
  getContactById
}