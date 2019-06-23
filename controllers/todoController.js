var bodyParser = require('body-parser');

var data = [{item: 'Get Food'}, {item: 'Walk Dog'}, {item: 'Kick some coding ass'}];

// bodyParser.urlencoded is the middleware to be run on the post request
var urlencodedParser = bodyParser.urlencoded({ extended: false });


module.exports = function (app) {

    app.get('/todo', function (req, res) {
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser, function (req, res) {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo', function (req, res) {

    });
};