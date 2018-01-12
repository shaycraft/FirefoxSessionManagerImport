var express = require('express');
var config = require('./config');
var bodyParser = require('body-parser');
var crypto = require('crypto');

var tokens = [];
var app = express();
const EXPIRE_TIME = 120; // 2 hours

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var handleError = function (err, res) {
    console.log('ERROR in server.js...');
    console.log(err);
    res.send(err);
}

// allow cors

app.use(function(req, res, next) {
    res.header('X-Frame-Options', 'ALLOWALL');
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST, GET');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth-token");
    console.log('CORS headers set...');
    next();
});


app.get('/', function (req, res) {
    res.send('sup bruh');
});

app.post('/authorize', function (req, res) {
    //console.log(req.body);
    //console.log(req.headers);
    if (req.body && req.body.password === config.password) {
        console.log('password is good');
        crypto.randomBytes(48, function (err, buffer) {
            let token = buffer.toString('hex');
            tokens.push({ value: token, timestamp: Date.now() });
            res.send(token);
            res.statusCode = 200;
            res.end();
            console.log(tokens);
        });
    }
    else {
        console.log('password is bad');
        res.statusCode = 403;
        res.end();
    }
});

app.get('/tabs', async function (req, res) {
    var token = req.headers['x-auth-token'] || '';
    var valid_tokens = tokens.filter(t => t.value === token);

    //TODO:  check validity of timestamp
    if (!valid_tokens || valid_tokens.length === 0) {
        console.log('Invalid token passed');
        res.statusCode = 403;
        res.end();
        return;
    }

    console.log('Token is good');
    
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
