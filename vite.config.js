import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

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
        vanillaExtractPlugin(),
    ],
    server: {
        hmr: true, // ホットモジュールリプレースメント（HMR）を無効化する
    },
    resolve: {
        alias: {
            '@': '/resources',
	        '@mainElements': '/resources/react/app/mainApp/components/elements',
	        '@mainLayouts': '/resources/react/app/mainApp/components/layouts',
	        '@mainFeatures': '/resources/react/app/mainApp/features',
	        '@adminElements': '/resources/react/app/adminApp/components/elements',
	        '@adminLayouts': '/resources/react/app/adminApp/components/layouts',
	        '@adminFeatures': '/resources/react/app/adminApp/features',
        },
    },
});
