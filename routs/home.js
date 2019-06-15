var express = require('express');
const Router=express.Router();
var path=require("path");

Router.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname,"../home.html"));
});

module.exports=Router;


