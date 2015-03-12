/**
 * Get media queries to javasript
 */
define(['jquery'], function($) {
    var getValues, bp;
    getValues = function(pseudoEl) {
        var value = window
            .getComputedStyle(document.body, ':' + pseudoEl)
            .getPropertyValue('content');
        return value.replace(/(\'|\")/g, '');
    },
    bp = {
        point: getValues('after'),
        width: getValues('before')
    }
    return bp;
});
