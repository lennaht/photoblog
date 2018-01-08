module.exports = {
	register (req, res) {
		res.send({
			message: req.body.username + ' Registered'
		});
	}
};