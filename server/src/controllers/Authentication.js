const mongoose = require('mongoose');
const { User } = require('../models');

module.exports = {
	async register (req, res) {
		try {
			const user = await User.create(req.body);
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