var express = require('express');

var app = express();


app.get('/', function(req, res) {
    res.send('sup bruh');
});

app.listen(3000);
