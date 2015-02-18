/**
 * Sticky positionin
 */
define(function() {
    return {
        stickyPosition: function(el, offset) {
            // The element
            var el = document.querySelector(el),
                // Offset from top
                origOffsetY = el.offsetTop;

            // The locig
            var sticker = function() {
                if (window.scrollY > origOffsetY) {
                    el.classList.add('sticky');
                } else {
                    el.classList.remove('sticky');
                }
            }

            sticker();

            // Event listener
            document.addEventListener('scroll', sticker);
        }
    }
});
