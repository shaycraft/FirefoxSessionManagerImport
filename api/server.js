var express = require('express');
var config = require('./config');
var app = express();

var handleError = function (err, res) {
    console.log('ERROR in server.js...');
    console.log(err);
    res.send(err);
}

app.get('/', function (req, res) {
    res.send('sup bruh');
});

app.post('/authorize', function (req, res) {
    console.log(req.body);
    console.log(req.headers);
    res.statusCode = 200;
    res.end();
});

app.get('/tabs', async function (req, res) {
    var repo = require('../import/repository');
    await repo.init();
    repo.getTabs()
        .then(data => {
            res.send(data.rows);
            repo.dispose();
        }, err => handleError(err, res));
});

app.listen(3000);
console.log('Listening on port 3000');
console.log(config);