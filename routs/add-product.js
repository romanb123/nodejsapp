const express = require('express');
const path = require('path');
const router = express.Router();
const products=[];

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname,"../add-product.html"));
});

router.post('/add-product', (req, res, next) => {
  products.push(req.body);
  console.log(req);
  res.redirect('/list');
});

exports.routes = router;
exports.products = products;

