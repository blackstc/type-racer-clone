var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var User = new Schema(
  {
    name: String,
  }
);

module.exports = mongoose.model('users', User);

// mongoose.connect('mongodb://localhost/node-superhero');

mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/translator-users");
