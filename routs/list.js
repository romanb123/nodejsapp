var express = require('express');
const router = express.Router();
const products = require('./add-product');
const path = require('path');


router.get('/list', function (req, res) {
  res.render('list', { lists: products.products });
  console.log("from list", products.products);
});

module.exports = router;
