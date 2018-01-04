/*eslint-env node*/
module.exports = (app) => {
	app.post('/register', (req, res) => {
		res.send({
			message: req.body.username + ' Registered'
		});
	});

	app.get('/status', (req, res) => {
		res.send('Back-end working');
	});
};