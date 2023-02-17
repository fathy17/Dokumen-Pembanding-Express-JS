var express = require('express');
var app = express();

var films = require('./routes/films.js');
var categories = require('./routes/categories.js');

app.get('/', function (req, res) {
  res.send('Hello world!');
});

app.use('/films', films);
app.use('/categories', categories);

app.listen(3000);
