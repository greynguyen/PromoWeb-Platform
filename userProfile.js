var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userModel = new Schema({
	username: String,
	password: String,
	email: String,
});

var User = mongoose.model('User', userModel);

module.exports = User;
