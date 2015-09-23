var express = require('express');
var router = express.Router();
var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
// var mongoose = require('mongoose');
var User = require('../models/user');
// var keys=require('../routes/key');
var randomWords = require('random-words');

// get ALL users
router.get('/users', function(req, res, next) {
  User.findQ()
    .then(function (result) { res.json(result);})
    .catch(function (err) {res.send(err);})
    .done();
});

//get 20 random words and send them back as json
router.get('words', function(req, res, next) {
  var wordsArr = randomWords(20);
  res.json(wordsArr);
});


module.exports = router;
