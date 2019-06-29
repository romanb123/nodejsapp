var express = require('express');
const router = express.Router();
const addItem = require('../controlers/addnew');
const path = require('path');


router.get('/list', addItem.addToList);
router.get('/list/:productid', addItem.idproduct);

module.exports = router;
