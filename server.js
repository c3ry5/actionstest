var express = require('express');
var app = express();
var password = "123qweasd";

app.get('/', function (req, res) {
  res.status(200).send('ok');
});

app.post('/login', function (req, res) {
  var user = req.body.user;
  var pass = req.body.pass;
  var sql  = "SELECT * FROM users WHERE user = '" + user + "' AND pass = '" + pass + "'";
  return sql;
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  
  console.log('Example app listening at port %s', port);
});


module.exports = server;