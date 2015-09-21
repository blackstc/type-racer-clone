var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var User = new Schema(
  {
    name: String,
    challengesTaken: Number,
    challengesPassed: Number,
    challengesFailed: Number,
    words: Number,
    wordsCorrect: Array,
    wordsIncorrect: Array
  }
);

module.exports = mongoose.model('users', User);

// mongoose.connect('mongodb://localhost/node-superhero');

mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/translator-users");
