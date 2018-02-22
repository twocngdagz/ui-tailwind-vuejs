let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

if (!mix.inProduction()) {
    mix.webpackConfig({
        devtool: 'source-map'
    })
    .sourceMaps()
}
mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/index.sass', 'public/css/app.css')
   .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.js') ],
    });
mix.browserSync({
    proxy: 'http://ui-tailwind-vuejs.test/#/'
})
