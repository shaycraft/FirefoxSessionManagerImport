var express = require('express');
var app = express();

var handleError = function(err, res) {
    console.log('ERROR in server.js...');
    console.log(err);
    res.send(err);
}

app.get('/', function(req, res) {
    res.send('sup bruh');
});

app.get('/tabs', function(req, res) {
   var repo = require('../import/repository'); 
   repo.getTabs()
   .then(data => {
       res.send(data.rows);
       repo.dispose();       
   }, err => handleError(err, res));
});

app.listen(3000);
console.log('Listening on port 3000');