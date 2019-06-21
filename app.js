var express = require('express');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');
var home = require('./routs/home');
var addproduct = require('./routs/add-product');
var list = require('./routs/list');
var error = require('./controlers/error');


app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(home);
app.use(addproduct.routes);
app.use(list);

app.use('/', error.error);

app.listen(3000);