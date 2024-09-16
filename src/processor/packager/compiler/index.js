const Processor = require('@beyond-js/bundles-sdk/processor/packager/compiler/singly');
module.exports = class extends Processor {
	get dp() {
		return 'txt.compiler';
	}

	_compileSource(source) {
		const { processor, distribution } = this.packager;

		try {
			const code = JSON.parse(source.content);
			const compiled = new this.CompiledSource(processor, distribution, source.is, source, { code });
			return { compiled };
		} catch (exc) {
			const errors = [{ message: exc.message }];
			return { errors };
		}
	}
};
