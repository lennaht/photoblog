/* eslint-env node*/
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const config = require('../config.js');

//Init express and middleware
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

//Load router
require('./routes.js')(app);

//Run server
app.listen(config.port);
