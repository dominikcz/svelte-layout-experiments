import adapter from '@sveltejs/adapter-static';
// import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

// eslint-disable-next-line tsdoc/syntax
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	// preprocess: vitePreprocess(),
	preprocess: preprocess(),	
	onwarn: (warning, handler) => {
		if (warning.code.startsWith('a11y-') || warning.code.includes('unused property')) {
			return;
		}
		handler(warning);
	},

	kit: {

		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		// adapter: adapter()
		adapter: adapter({
			fallback: 'index.html',
			pages: 'public'
		})
	}
};

export default config;
