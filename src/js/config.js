require.config({
    urlArgs: 'bust=' + (new Date()).getTime(),
    baseUrl: 'js',
    paths: {
        jquery: '../lib/jquery'
    },
    deps: ['modules/app']
});
