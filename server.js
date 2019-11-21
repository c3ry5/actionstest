var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.status(200).send('ok');
});

app.post('/login', function (req, res) {
  var user = req.body.user;
  var pass = req.body.pass;
  var sql  = "SELECT * FROM users WHERE user = '" + user + "' AND pass = '" + pass + "'";
  res.status(200).send(sql);
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  
  console.log('Example app listening at port %s', port);
});


module.exports = server;