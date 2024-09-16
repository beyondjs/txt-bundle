const ConcatWithSourcemaps = require('concat-with-sourcemaps');
module.exports = class {
	#concat;

	constructor() {
		this.#concat = new ConcatWithSourcemaps(true, 'ts.map.js', '\n');
	}

	get code() {
		return this.#concat.content.toString();
	}

	#map;
	get map() {
		if (this.#map) return this.#map;
		return (this.#map = JSON.parse(this.#concat.sourceMap));
	}

	concat(code, map) {
		if (!code) return;
		this.#map = undefined;
		map ? this.#concat.add(null, code, map) : this.#concat.add(null, code);
	}

	toJSON() {
		const { code, map } = this;
		return { code, map };
	}
};
