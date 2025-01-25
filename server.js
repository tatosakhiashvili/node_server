// Load the json-server module to create a mock API server
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');  // Points to a db.json file (where your mock data will be stored)
const middlewares = jsonServer.defaults();

// Set up the server with default middlewares
server.use(middlewares);

// Use your mock data file (db.json) for the API
server.use(router);

// Start the server on port 3000 and log a message
server.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000');
});
