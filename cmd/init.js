const path = require('path');
const inquirer = require('inquirer');
const download = require('download');
const ora = require('ora');
const userHome = require('user-home');

const log = require('../lib/log.js');
const generate = require('../lib/generate.js');

function prompt(inquirer, downloadEvent) {
	// Getting information from input
	inquirer
		.prompt([{
			type: 'input',
			name: 'name',
			message: 'Please enter the project name',
			default: 'project'
		}, {
	    type: 'input',
	    name: 'description',
	    message: 'Please enter a brief introduction to the project',
	    default: 'A project that created by groll-cli'
		}, {
	    type: 'input',
	    name: 'author',
	    message: 'Please enter the creation author',
	    default: 'admin'
		}, {
	    type: 'input',
	    name: 'version',
	    message: 'Please enter the project version',
	    default: '1.0.0'
		}])
		.then(answers => {
			// 将模板文件下载当前用户名下的缓存文件.groll
			downloadEvent && downloadEvent(answers, path.join(userHome, '.groll'));
		})
		.catch(err => {
			log.error('Error:', err);
		})
}

function downloadTpl(proInfo, dest, generate) {
	let url = 'https://github.com/pxy0809/groll-cli-tpl/archive/master.zip',
		opt = {
			extract: true,
			strip: 1,
			mode: '666',
			headers: {
				accept: 'application/zip'
			}
		};

	let spinner = ora('Downloading template.\n');

	spinner.start()
	download(url, dest, opt)
		.then(data => {
			generate && generate(proInfo, dest);
			log.success(`Download the template success.`);
			spinner.stop();
		})
		.catch(err => {
			spinner.stop();
			log.error('Failed to download template', err);
		});
}

module.exports = function() {
	prompt(inquirer, (proInfo, dest) => {
		downloadTpl(proInfo, dest, (proInfo, dest) => {
			generate(proInfo, dest, path.resolve(proInfo.name));
		});
	});
};