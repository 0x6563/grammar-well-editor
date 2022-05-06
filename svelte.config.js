import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { resolve } from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),
    kit: {
        paths: { assets: "", base: "/grammar-well-editor" },
        adapter: adapter({
            // default options are shown
            pages: 'docs',
            assets: 'docs',
            fallback: 'index.html'
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
