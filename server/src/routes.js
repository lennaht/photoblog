/*eslint-env node*/
const auth = require('./controllers/Authentication');
const validate = require('./validation/validateUser');

const isLoggedIn = require('./validation/isLoggedIn');

module.exports = (app) => {
	app.post('/register', validate.register, auth.register);
	
	app.post('/login', auth.login);

	app.get('/status', (req, res) => {
		res.send('Back-end working');
	});

	app.post('/private', isLoggedIn, (req, res, next) => {
		res.send('User authenticated');
	});

	app.post('/confirmToken', auth.confirmToken);
};
