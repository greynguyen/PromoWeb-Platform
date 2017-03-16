var mongoose = require('mongoose');
var User = require('./userModel");

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://PromoWeb:PromoWeb@ds133290.mlab.com:33290/promoweb', function (err) {
	if (err) {
		console.log('Error connecting to mongodb database: %s. \nIs "mongod" running?', err.message);
		process.exit(0);	
	}
});

//We're connected!

var db = mongoose.connection;

var addUserProfile = function (user, pass, email, callback) {

	User.find({'username': user, 'password': pass}, function (err, userArr) {
		if (err) {
			console.log("Failed in search for existing users");
			callback(err);
		}
		if (userArr.length) {
			console.log("User already exists");
		} else {
			var newUser = new User({
				username: user,
				password: pass,
				email: email
			});
			newUser.save(function (err) {
				if (err) {
					console.log("Error saving user");
				}
				callback(null);
				//Saved user if reaches here
			});
		}
	});

}
