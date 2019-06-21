const express = require('express');
const path = require('path');
const router = express.Router();
const addProd = require("../controlers/addnew");


router.get('/add-product', addProd.addProduxt2View);
router.post('/add-product', addProd.newProd);

exports.routes = router;


