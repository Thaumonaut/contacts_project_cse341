const {MongoClient} = require('mongodb')
let db;

const InitializeDB = (callback) => {
  if (db) {
    console.log('DB already initialized', db);
    callback(null, db);
  }

  MongoClient.connect(process.env.MONGO_URI)
    .then(client => {
      db = client.db('cse-db');
      callback(null, db);
    })
    .catch(err => {
      callback(err, null);
    })
}

const getDatabase = () => {
  if (!db) {
    throw new Error('Database not initialized')
  }
  return db
}

module.exports = {
  InitializeDB,
  getDatabase
}