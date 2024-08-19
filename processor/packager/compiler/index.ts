import { ProcessorSinglyCompiler, Source, CompiledSource } from '@beyond-js/bundle-sdk';

interface CompilationResult {
	compiled?: CompiledSource;
	errors?: { message: string }[];
}

export default class TxtCompiler extends ProcessorSinglyCompiler {
	get dp(): string {
		return 'txt.compiler';
	}

	protected _compileSource(source: Source): CompilationResult {
		const { processor, distribution } = this.packager;

		try {
			const code = JSON.parse(source.content);
			const compiled = new this.CompiledSource(processor, distribution, source.is, source, { code });
			return { compiled };
		} catch (exc: any) {
			const errors = [{ message: exc.message }];
			return { errors };
		}
	}
}
