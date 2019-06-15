var express = require('express');
var app = express();
var path=require('path');
const bodyParser = require('body-parser');
var home=require('./routs/home');
var addproduct=require('./routs/add-product');
var list=require('./routs/list');



app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.set('views',__dirname);
app.use(home);
app.use(addproduct.routes);
app.use(list);

app.use('/', function (req, res,next) {
    res.render('404',{title:'page not found'});
}); 

app.listen(3000);