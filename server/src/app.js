/* eslint-env node*/
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

//Init express and middleware
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
	res.send({
		message: req.body.username + ' Registered'
	});
});

//Run server
app.listen(process.env.PORT || 8081);


