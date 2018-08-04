const chalk = require('chalk');
const log = console.log || function() {};

module.exports = {
	error() {
		log(chalk.red.apply(this, arguments));
	},
	info() {
		log.apply(this, arguments);
	},
	warn(msg) {
		log(chalk.yellow.apply(this, arguments));
	},
	success(msg) {
		log(chalk.green.apply(this, arguments));
	}
};