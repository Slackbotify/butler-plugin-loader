'use strict';

const npmInstallPackage = require('npm-install-package');
const npmSearch = require('npm-module-search');

function list(message, callback) {
	npmSearch.search('slackbotify-butler', (err, modules) => {
		let responseMessage = ``;
		if (err) {
			callback(`Something went wrong.. Check my console.`);
		} else {
			for (const module of modules) {
				responseMessage += `*${module.name}* ${module.version} - _${module.description}_`;
			}
			callback(responseMessage);
		}
	});
}

function enable(message, callback) {
	let pkg = message.matchResult[1];
	npmInstallPackage(pkg, err => {
		if (err) {
			callback(`Something went wrong with the installation`);
		} else {
			this.requireRegister(require(pkg));
			callback(`*plugin:* ${pkg} loaded!`);
		}
	});
}

module.exports = {list, enable};
