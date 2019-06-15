var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var path=require('path');
var home=require('./routs/home');
var addproduct=require('./routs/add-product');
var list=require('./routs/list');

app.use(bodyParser.urlencoded({extended: false}));
app.use(home);
app.use(addproduct);
app.use(list);

app.use('/', function (req, res,next) {
    res.send("<h1>no such page</h1>");
}); 


app.listen(3000);