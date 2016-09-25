
# butler-plugin-loader
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![npm](https://img.shields.io/npm/v/butler-plugin-loader.svg?maxAge=3600)](https://www.npmjs.com/package/butler-plugin-loader)

> Plugin loader for Butler

## Butler
_More about the butler project here._

## Enable / Install
Enabling this handler for your Butler bot is as easy as requiring the package.
```javascript
bot.requireRegister(require('butler-plugin-loader'));
```

## Handlers
### Plugin list
**Admin only** <br>
**Available in:** Direct message. <br>
Trigger: `!plugin list`

Shows a list of available plugins for Butler.

### Enable plugin
**Admin only** <br>
**Available in:** Direct message. <br>
Trigger: `!plugin <package name>` _(e.g. !plugin enable butler-weather)_

Downloads and enables the plugin. (_No restart is required_)

### License
MIT
