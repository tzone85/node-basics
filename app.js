var express = require('express');
var todoControler = require('./controllers/todoController');

var app = express();

// set up template engine
app.set('view engine', 'ejs');

// static files (by removing the first parameter of the 'use' middleware, it's not going to be route specific)
app.use(express.static('/public'));

// fire controller
todoControler(app);

// listen to port
app.listen(3000);
console.log('Listening to port: 3000');