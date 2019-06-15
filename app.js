var fs = require('fs');

// Reading files

fs.readFile('readme.txt', 'utf8', function (err, data) {
    fs.writeFile('writeMe2', data);
});

// deleting a file

fs.unlink('writeMe2');