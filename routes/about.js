var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Grocery = mongoose.model('Grocery');

/* GET about page */
router.get('/', function(req, res, next) {
  res.render('../views/about', { title: 'About' });
});

module.exports = router; 

