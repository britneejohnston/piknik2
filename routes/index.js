var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Grocery = mongoose.model('Grocery');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Piknik' });
});

module.exports = router;
