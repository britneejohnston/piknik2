var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Grocery = mongoose.model('Grocery');

router.get('/', function(req, res) {
  var re = new RegExp(req.params.search, 'i');
	Grocery.find().or([{ 'category': { $regex: re}}, {'product': { $regex: re}}]).exec(function(err, groceries) {
    res.send(groceries)
  })
});

router.put('/:id', function(req, res, next) {
	Grocery.findByIdAndUpdate(
		req.params.id,
		{ $set: { content: req.body.content }},
		function (err, grocery) {
			res.json(grocery);
		});
});


module.exports = router;

