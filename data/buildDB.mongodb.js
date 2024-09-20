/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('cse-db');

// Insert a few documents into the sales collection.
db.getCollection('contacts').insertMany([
  { '_id':           1,
    'firstName':     'Josh',
    'lastName':      'Thompson',
    'favoriteColor': 'green',
    'email':         'joshthompson@fake.com',
    'birthday':       new Date('2000-06-03')
  },
  { '_id':           2,
    'firstName':     'Tylor',
    'lastName':      'Perry',
    'favoriteColor': 'blue',
    'email':         'tylorperry@fake.com',
    'birthday':       new Date('1989-09-11')
  },
  { '_id':           3,
    'firstName':     'Nicole',
    'lastName':      'Samp',
    'favoriteColor': 'pink',
    'email':         'nicolesamp@fake.com',
    'birthday':       new Date('2000-07-02')
  },
]);