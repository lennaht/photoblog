/*eslint-env node*/
const auth = require('./controllers/Authentication');
module.exports = (app) => {
	app.post('/register', auth.register);	

	app.get('/status', (req, res) => {
		res.send('Back-end working');
	});
};