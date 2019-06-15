var fs = require('fs');

// create a directory
// fs.mkdir('things', function () {
//     fs.readFile('readMe.txt', 'utf8', function (err, data) {
//        fs.writeFile('./things/writeMe.txt', data);
//     });
// });

// remove a directory start off by removing the file first
fs.unlink('./things/writeMe.txt', function () {
   fs.rmdir('things');
});

// fs.rmdir('things');
