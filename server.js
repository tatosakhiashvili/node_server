// Load the http module to create an HTTP server.
const http = require('http');

// Configure the HTTP server to respond with a message.
const server = http.createServer((req, res) => {
  console.log('A request was made to the server!');
  
  // Set the response HTTP header and send a basic response.
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');
});

// Listen on port 3000 and log a message when the server starts.
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
