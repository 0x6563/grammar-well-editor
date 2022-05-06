import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { resolve } from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),
    kit: {
        adapter: adapter({
            // default options are shown
            pages: 'build',
            assets: 'build',
            fallback: null
        }),
        vite: {
            config: {
                cache: false
            },
            resolve: {
                alias: {
                    '@components': resolve('./src/components'),
                    '@services': resolve('./src/services'),
                }
            }
        }
    }
};

export default config;
