/**
 * Class name actions
 */
define(function() {
    return {
        /**
         * Adds a class name to an element
         * @param {string} _element The target element
         * @param {string} _classes The class names wanted to add
         */
        add: function(_element, _classes) {
            var classList, item, _i, _len;
            classList = _element.classList;
            for (_i = 0, _len = _classes.length; _i < _len; _i++) {
                item = _classes[_i];
                if (classList.length <= _len) {
                    classList.add(item);
                } else {
                    classList.remove(item);
                }
            }
            return _element;
        },

        /**
         * Remove class from a given element
         * @param {string} e The targetend element
         * @param {class}  c The class name to remove
         */
        remove: function(e, c) {
            e.className = e.className.replace(new RegExp('(?:^|\\s)' + c + '(?!\\S)'), '');
        }
    }
});
