// Paths
var path = {
    lib: '../lib/',
    js: '.',
    mod: 'modules/'
}

require.config({
    deps: ['modules/app'],
    //deps: [path.js + 'global'],
    paths: {
        jquery: path.lib + 'jquery',
        prism: path.lib + 'prism'
    }
    // Shims if needed
    // shim: {
    //     prism: {
    //         exports: 'Prism'
    //     }
    // }
});
