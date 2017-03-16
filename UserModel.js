var mongoose = require('mongoose');
var User = require('./UserModel');

var Schema = mongoose.Schema;

var userModel = new Schema({
	username: String,
	password: String,
	messages: Array,
	createdDate: String,
	lastLoggedIn: String
});

userModel.pre('save', function (next) {
	var currDate = new Date();

	if (!this.createdDate) {
		this.createdDate = currDate;
	}

	if (!this.lastLoggedIn) {
		this.lastLoggedIn = currDate;
	}


	this.lastLoggedIn = currDate;

	next();
});


var User = mongoose.model('User', userModel);

module.exports = User;
