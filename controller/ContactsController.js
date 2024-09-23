const mongodb = require('../data/database')
const db = mongodb.getDatabase().collection('contacts');

const getAllContacts = (req, res) => {
  db.find().toArray().then((data) => {
    res.json(data)
  })
}

const getContactById = (req, res) => {
  db.findOne({_id: parseInt(req.params.id)}).then((data) => {
    if(!data) {
      res.status(404).json({message: 'Contact not found'})
      return;
    }
    
    res.json(data)
  })
}

const createContact = (req, res) => {
  const id = req.body._id;

  if(!id) {
    res.status(500).json({message: 'Contact "_id" required'})
    return;
  }

  db.findOne({_id: parseInt(id)}).then((data) => {
    if(data) {
      res.status(500).json({message: 'Contact already exists'})
      return;
    }
    db.insertOne(req.body).then((data) => {
      res.json(data)
    })

  }).catch((err) => {
    console.log(err)
    res.status(500).json({message: 'Internal server error'})
  })
}

const deleteContact = (req, res) => {
  db.deleteOne({_id: parseInt(req.params.id)}).then((data) => {
    res.json(data)
  })
}

const updateContact = (req, res) => {
  db.updateOne({_id: parseInt(req.params.id)}, {$set: req.body}).then((data) => {
    res.json(data)
  })
}

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  deleteContact,
  updateContact
}