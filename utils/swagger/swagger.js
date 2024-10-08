const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Save, Update, Delete and Retrieve contacts stored in a MongoDB database',
    version: '0.2.0'
  },
  schemes: ['http', 'https'],
  host: 'contacts-project-cse341-ig63.onrender.com'
};

const outputFile = './swagger-output.json';
const routes = ['./server.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);