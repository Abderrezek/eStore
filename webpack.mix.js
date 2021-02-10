const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.options({
    autoprefixer: false,
})
mix.setPublicPath('public');

// Login Screen
mix.js("resources/js/screens/login.js", "js/login.js")
    .preact();

// Register Screen
mix.js("resources/js/screens/register.js", "js/register.js")
    .preact();
