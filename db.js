var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://Snap2Snap:Snap2Snap@ds147799.mlab.com:47799/snap2snap', function (err) {
	if (err) {
		console.log('Error connecting to mongodb database: %s.\nIs "mongod" running?', err.message);
		process.exit(0);
	}
});

//We're connected!

var db = mongoose.connection;

var addProfile = function (user, pass, email, callback) {
	
}
