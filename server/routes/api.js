var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../database');

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


module.exports = router;
