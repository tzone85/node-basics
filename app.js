var fs = require('fs');

// Reading files

var readme = fs.readFileSync('readme.txt', 'utf8');

fs.writeFileSync('writeMe.txt', readme);
