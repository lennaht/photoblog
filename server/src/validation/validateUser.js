const Joi = require('joi');
module.exports = {
	register (req, res, next) {
		const passwordRegex = new RegExp('^[a-zA-Z0-9]{6,32}$');
		const userSchema = {
			username: Joi.string().min(3).max(15).required(),
			password: Joi.string().regex(passwordRegex).required(),
			confirmPassword: Joi.any().valid(Joi.ref('password')).required()
		};

		const { error } = Joi.validate(req.body, userSchema);

		if(error) {
			switch (error.details[0].context.key) {
			case 'username':
				res.status(400).send({
					error: {
						message: 'Your username must have a length between 3 and 15 characters.' 
					}
				});
				break;
			case 'password':
				res.status(400).send({
					error: {
						message: `Your password has to match the following rules:
							<br>- It can only contain lower- and uppercase characters and numbers</br>
							<br>- It must have a length between 6 and 15 characters</br>							
						` 
					}
				});
				break;
			case 'confirmPassword':
				res.status(400).send({
					error: {
						message: 'The password inputs have to be equal.' 
					}
				});
				break;
			default:
				res.status(400).send({
					error: {
						message: 'Your given information is invalid.'
					}
				});
			}
		} else {
			next();
		}
	}
};