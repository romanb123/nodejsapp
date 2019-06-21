var express = require('express');
const Router = express.Router();
var path = require("path");

Router.get('/home', function (req, res) {
  res.render('home', { title: 'value of this property' });
});

module.exports = Router;


