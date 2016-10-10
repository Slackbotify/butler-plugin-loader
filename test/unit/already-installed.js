'use strict';
const test = require('ava');
const path = require('path');
const fs = require('fs');
const exec = require('child_process').exec;

let pluginHandler = null;

test.beforeEach(t => {
	pluginHandler = require('../../lib/plugin-handler');
});

// Remove installed test package
test.afterEach(t => {
	try {
		const pkgPath = path.join(__dirname, '../../', 'node_modules/butler-jokes');
		const stats = fs.statSync(pkgPath);
		if (stats.isDirectory()) {
			exec('rm -r ' + pkgPath);
		}
	} catch (e) {}
});

test.cb('install 1 package', t => {
	let packageToInstall = 'butler-jokes';
	pluginHandler._install(packageToInstall, (err, result) => {
		t.is(result, `*plugin:* ${packageToInstall} loaded!`);
		t.end();
	});
});

test.cb('install already installed package gives an error', t => {
	let packageToInstall = 'butler-jokes';
	pluginHandler._install(packageToInstall, () => {
		pluginHandler._install(packageToInstall, (err, result) => {
			t.is(err, 'Plugin is already installed');
			t.end();
		});
	});
});
