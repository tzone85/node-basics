var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

// pipe from a readable stream to a writable stream
myReadStream.pipe(myWriteStream);