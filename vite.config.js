import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from "path";

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    config: {
        caches: false
    },
    resolve: {
        alias: {
            '@components': resolve('./src/components'),
            '@services': resolve('./src/services'),
        }
    }

    // vite: {
    //     config: {
    //         cache: false
    //     },
    //     resolve: {
    //         alias: {
    //             '@components': resolve('./src/components'),
    //             '@services': resolve('./src/services'),
    //         }
    //     }
    // }
};

export default config;
