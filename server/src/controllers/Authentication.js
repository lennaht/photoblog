const mongoose = require('mongoose');
const { User } = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
	async register (req, res) {
		try {
			const hash = await bcrypt.hash(req.body.password, 10);
			const user = await User.create({
				username: req.body.username,
				password: hash
			});
			res.send(JSON.stringify(user));
		} catch (err) {
			console.log(err);
			res.status(400).send({
				error: {
					message: 'Username is already taken.'
				}
			});
		}
		
	}
};