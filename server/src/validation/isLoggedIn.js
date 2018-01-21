const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = (req, res, next) => {
	try {
		const token = req.body.token;
		const decoded = jwt.verify(token, config.jwtKey);
		next();
	} catch (err) {
		return res.status(401).send({
			error: {
				message: 'User not authenticated'
			}
		});
	}
};