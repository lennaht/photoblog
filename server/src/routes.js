/*eslint-env node*/
const auth = require('./controllers/Authentication');
const validate = require('./validation/validateUser');

module.exports = (app) => {
	app.post('/register', validate.register, auth.register);
	
	app.post('/login', auth.login);

	app.get('/status', (req, res) => {
		res.send('Back-end working');
	});
};
