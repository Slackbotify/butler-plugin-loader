'use strict';

const npmInstallPackage = require('npm-install-package');
const npmSearch = require('npm-module-search');

function help(message, callback) {
	let responseMessage = `
*Plugin loader*
*-------------*
!plugin list - Get a list of available plugins
!plugin enable <plugin-name> - Download and enable a plugin _!plugin enable butler-weather_`;
	callback(responseMessage);
}

function list(message, callback) {
	npmSearch.search('slackbotify-butler', (err, modules) => {
		let responseMessage = ``;
		if (err) {
			callback(`Something went wrong.. Check my console.`);
		} else {
			for (const module of modules) {
				if (module.name !== 'butler-plugin-loader') {
					responseMessage += `*${module.name}* ${module.version} - _${module.description}_ \n`;
				}
			}
			callback(responseMessage);
		}
	});
}

function enable(message, callback) {
	const pkg = message.matchResult[1];
	if (pkg === 'butler-plugin-loader') {
		callback(`You *cannot* install the plugin loader with the plugin loader :sweat_smile:`);
	} else {
		npmInstallPackage(pkg, err => {
			if (err) {
				callback(`Something went wrong with the installation`);
			} else {
				this.requireRegister(require(pkg));
				callback(`*plugin:* ${pkg} loaded!`);
			}
		});
	}
}

module.exports = {help, list, enable};
