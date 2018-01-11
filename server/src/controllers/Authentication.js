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
				password: hash
			});
			res.status(200).send(JSON.stringify(user));
		} catch (err) {
			console.log(err);
			res.status(400).send({
				error: {
					message: 'Username is already taken.'
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
				userId: user._id
			}, config.jwtKey, {expiresIn: 60 * 60});

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