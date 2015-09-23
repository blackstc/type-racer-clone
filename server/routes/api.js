var express = require('express');
var router = express.Router();
var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
// var mongoose = require('mongoose');
var User = require('../models/user');
var keys=require('../routes/key');
var randomWords = require('random-words');

var bt = require('../../node_modules/bing-translate/lib/bing-translate.js').init({
     client_id:keys.client_id,
     client_secret:keys.client_secret
});

// get ALL users
router.get('/users', function(req, res, next) {
  User.findQ()
    .then(function (result) { res.json(result);})
    .catch(function (err) {res.send(err);})
    .done();
});
//
// // get SINGLE user
router.get('/user/:id', function(req, res, next) {
  User.findById(req.params.id)
    .then(function(result) {res.json(result);})
    .catch(function(err) {res.send(err);})
    .done();
});

// post ALL users
router.post('/users', function(req, res, next) {
  var newUser = new User({name: req.body.name});
  newUser.saveQ()
    .then(function (result) {res.json(result);})
    .catch(function (err) {res.send(err);})
    .done();
});

//update for single user
router.put('/user/:id', function(req, res, next) {
  var update = req.body;
  User.findByIdAndUpdate(req.params.id, update)
    .then(function(result) {res.json(result);})
    .catch(function(err) {res.send(err);})
    .done();
});

// delete for single user
router.delete('/user/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id)
    .then(function(result) {res.json(result);})
    .catch(function(err) {res.send(err);})
    .done();
});

//post request for word to be translated
router.post("/practice/:id", function(req, res, next) {
  var start = req.body.start;
  var end = req.body.end;
  var word = req.body.word;
  bt.translate(word, start, end, function(err, response) {
    res.json(response.translated_text);
  });
});


// get random words from generator
router.get("/challenge/:id", function(req, res, next) {
  var randomQuizWords = randomWords(20);
  res.json(randomQuizWords);
});


module.exports = router;
