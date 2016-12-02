var http = require('http')
 
var server = http.createServer(function(req, res) {
  if (req.headers['content-type'] === 'application/json') {
    res.writeHead(403, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({ error: "Our api is off limits!" }))
  } else {
	res.writeHead(200, { 'Content-Type': 'text/plain'})
    res.end('Greetings!\n')
  }
})

server.listen(1337, '127.0.0.1')
console.log('Server running at http://127.0.0.1:1337/')
