const chalk = require('chalk');

const oldLog = console.log;

global.console.log = (...lol) => oldLog(chalk.yellow(...lol));