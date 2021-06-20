const http = require('http')

const server = http.createServer((req, res) => {
  let bodyContent = 'Your user-agent is:\n\n';
  bodyContent += req.headers['user-agent'] || 'Unknown';

  res.statusCode = 200;
  res.end(bodyContent);
})

server.listen(8080, () => {
  console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
})


// Run: node webserver.js
// Output: HTTP webserver running. Access it at: http://localhost:8080/