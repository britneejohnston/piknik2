var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Grocery = mongoose.model('Grocery');

/* GET contact page */
router.get('/', function(req, res, next) {
  res.render('../views/contact', { title: 'Contact' });
});

module.exports = router; 

