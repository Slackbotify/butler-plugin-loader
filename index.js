
const pluginHandler = require('./lib/plugin-handler');

module.exports = [
	{
		groups: ['admin'],
		match: '!plugin',
		handler: pluginHandler.help
	},
	{
		groups: ['admin'],
		match: /!plugin list/i,
		handler: pluginHandler.list
	},
	{
		groups: ['admin'],
		match: /!plugin enable\s(.*)/i,
		handler: pluginHandler.enable
	}
];
