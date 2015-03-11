require.config({
    urlArgs: 'bust=' + (new Date()).getTime(),
    baseUrl: 'js',
    deps: ['modules/app']
    // deps: ['../dist/js/global.js']
});
