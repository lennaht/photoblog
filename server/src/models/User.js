const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//User schema
const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
});

const User = module.exports = mongoose.model('User', userSchema);