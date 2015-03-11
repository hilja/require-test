define('modules/classes', [], function () {
    return {
        add: function (_element, _classes) {
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
        remove: function (e, c) {
            e.className = e.className.replace(new RegExp('(?:^|\\s)' + c + '(?!\\S)'), '');
        }
    };
});
define('modules/sticky-position', [], function () {
    return {
        stickyPosition: function (el, offset) {
            var el = document.querySelector(el), origOffsetY = el.offsetTop;
            var sticker = function () {
                if (window.scrollY > origOffsetY) {
                    el.classList.add('sticky');
                } else {
                    el.classList.remove('sticky');
                }
            };
            sticker();
            document.addEventListener('scroll', sticker);
        }
    };
});
define('modules/debounce', [], function () {
    return debounce = function (func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            }, wait);
            if (immediate && !timeout) {
                func.apply(context, args);
            }
        };
    };
});
define('modules/pinkifyer', [], function () {
    document.body.style.backgroundColor = 'pink';
});
define('modules/app', [
    'require',
    'exports',
    'module',
    'modules/classes',
    'modules/sticky-position',
    'modules/debounce',
    'modules/pinkifyer'
], function (require) {
    var classes = require('./classes'), sticky = require('./sticky-position');
    require('./debounce');
    require('./pinkifyer');
    hiderShower('.hider-shower-button', '.main-nav');
    var header = document.getElementById('header');
    if (header != null) {
        sticky.stickyPosition('.header');
    }
    var resizeDebounced = debounce(function () {
    }, 50);
    window.addEventListener('resize', resizeDebounced);
    $('.toc-link, h2 a, h3 a, .up-link').on('click', function () {
        $('html, body').animate({ scrollTop: $(this.hash).offset().top - 60 }, 500);
    });
});