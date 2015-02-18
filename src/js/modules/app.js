define(function(require) {

    /**
     * Require modules
     */
    var dim = require('./dimensions'),
        classes = require('./classes'),
        sticky = require('./sticky-position'),
        bp = require('./media-queries');

    require('./debounce');
    require('./hider-shower');

    /**
     * Prints out breakpoin to console, good for debugging
     */
    //console.log('BP name: ' + bp.point + '. ', 'BP width: ' + bp.width);

    /**
     * Toggle hidden element on click, like a nav under a hotdog icont etc.
     */
    //hiderShower('.cog', '.overlay--settings');

    /**
     * Sticky positioning of elements. You might want to stick a navbar on top
     * of the page when scrolled down
     */
    var header = document.getElementById('header');
    if (header != null) {
        sticky.stickyPosition('.header');
    }

    /**
     * Debounced resize
     * Put here everything you want to run on resize event.
     */
    var resizeDebounced = debounce(function() {
        //dim.widthDisplay();
    }, 50);
    window.addEventListener('resize', resizeDebounced);

    /**
     * Smooth scrolling
     */
    $('.toc-link, h2 a, h3 a, .up-link').on('click', function() {
        $('html, body').animate({
            scrollTop:$(this.hash).offset().top - 60
        }, 500);
    });

});
