/* eslint-env node*/
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('./markLogs');

const config = require('../config.js');

//Connect to MongoDB
mongoose.connect(config.database);
const db = mongoose.connection;

//Check connection
db.once('open', () => {
	console.log('Connected to MongoDB');
});

//Check for MongoDB errors
db.on('error', (err) => {
	console.log('MongoDB error: ', err);
});

//Init express and middleware
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

//Load router
require('./routes.js')(app);

//Run server
try {
	app.listen(config.port);
	console.log(`Server running on port ${config.port}`);
} catch (err) {
	console.log('lel');
}

