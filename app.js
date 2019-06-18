var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));

app.get('/', function (req, res) {
   res.render('index');
});

app.get('/contact', function (req, res) {
    console.log(req.query);
    res.render('contact', { querryString: req.query });
});

// route variables using wrap parameters

app.get('/profile/:name', function (req, res) {
    var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fishing', 'reading']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);