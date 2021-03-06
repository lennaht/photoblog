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
	},
	email: {
		type: String,
		required: true,
		unique: true
	}
}, {timestamps: true});

userSchema.plugin(uniqueValidator);
const User = mongoose.model('User', userSchema);
User.on('save', doc => {
	console.log('New User created');
});

module.exports = User;