const mongoose = require('mongoose');
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = {
	async register (req, res) {
		try {
			const hash = await bcrypt.hash(req.body.password, 10);
			const user = await User.create({
				username: req.body.username,
				password: hash,
				email: req.body.email
			});
			res.status(200).send(JSON.stringify(user));
		} catch (err) {
			console.log(err.errors);

			var errorType;
			if (err.errors.username) {
				errorType = 'Username';
			} else if (err.errors.email) {
				errorType = 'E-Mail';
			} else {
				errorType = false;
			}
			
			res.status(400).send({
				error: {
					message: errorType ? `${errorType} is already taken.` : 'Could not create account'
				}
			});
		}
		
	},
	async login (req, res) {
		try {
			const { username, password } = req.body;

			const user = await User.findOne({'username': username});
			if(!user) {
				return res.status(403).send({
					error: {
						message: 'The login information was incorrect.'
					}
				});
			}
			console.log(user);
			const isPasswordCorrect = await bcrypt.compare(password, user.password);
			if (!isPasswordCorrect) {
				return res.status(403).send({
					error: 'The login information was incorrect.'
				});
			}

			const token = await jwt.sign({
				username: user.username,
				userId: user._id,
				email: user.email
			}, config.jwtKey, {expiresIn: 20});

			res.status(200).send({
				message: 'User logged in successfully',
				token: token,
				username: user.username,
				userId: user._id
			});

		} catch (err) {
			res.status(500).send({
				error: {
					message: 'Oops, an error occured. Please try again.',
					error: err
				}
			});
		}
	}
};