var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/data', function(req, res) {
  res.send('data from the server');
});

app.listen(1983);
