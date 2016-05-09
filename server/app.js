var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 3000));

// serve front-end files using middleware
app.use(express.static(__dirname + '../browser'));

// serve index of the app
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// error handling middleware
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// start listening
app.listen(app.get('port'), function() {
  console.log('Node app running on: ', app.get('port'));
});
