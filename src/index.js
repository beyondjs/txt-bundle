const Base = require('@beyond-js/txt-bundle/base');

module.exports = {
	name: 'txt',
	extname: ['.js'],
	multilanguage: true,
	bundle: {
		Bundle: Base,
		processors: ['txt'],
		template: true,
	},
};
