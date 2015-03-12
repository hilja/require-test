/**
 * r.js config
 * See all the options and more at:
 * https://github.com/jrburke/r.js/blob/master/build/example.build.js
 */

({
    mainConfigFile: 'config.js',
    // Relativve to this file
    baseUrl: '.',
    name: 'config',
    out: '../../dist/js/global.js',
    removeCombined: true,
    findNestedDependencies: true,
    optimize: 'none'
})
