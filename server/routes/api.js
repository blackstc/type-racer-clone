var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../database');
var keys=require('../routes/key');
var randomWords = require('random-words');

var bt = require('../../node_modules/bing-translate/lib/bing-translate.js').init({
     client_id:keys.client_id,
     client_secret:keys.client_secret
});

// get ALL users
router.get('/users', function(req, res) {
  User.find(function(err, users){
    res.json(users);
  });
});

// get SINGLE user
router.get('/user/:id', function(req, res) {
  var query = {"_id": req.params.id};
  User.findOne(query, function(err, user){
    res.json(user);
  });
});

// post ALL users
router.post('/users', function(req, res) {
  new User(req.body)
  .save(function(err, users) {
    res.json({message: 'Success!'});
  });
});

// delete for single user
router.delete('/user/:id', function(req, res) {
  var query = {"_id": req.params.id};
  User.findOneAndRemove(query, function(err, user){
    res.json(user);
  });
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


module.exports = router;
