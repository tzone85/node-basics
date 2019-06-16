
var http = require('http');

var server = http.createServer(function (request, response) {
    console.log('request was made: ' + request.url);
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hey Ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('Yo dawgs, now listenning to port 3000');