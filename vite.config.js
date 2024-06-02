import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';


export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/reset.css',
                'resources/scss/app.scss',
                'resources/ts/app.js'
            ],
            refresh: true,
        }),
    ],
    server: {
        hmr: false, // ホットモジュールリプレースメント（HMR）を無効化する
    },
    resolve: {
        alias: {
            '@': '/resources',
        },
    },
});
