/**
 * This is kind of where all the magic happens,
 * all the modueles get used in this file.
 */
define(function(require) {

    /**
     * Require modules
     */
    var dim = require('./dimensions'),
        classes = require('./classes'),
        sticky = require('./sticky-position'),
        bp = require('./media-queries'),
        $ = require('jquery');

    require('./debounce');
    require('./hider-shower');

    /**
     * Togle the navigation
     */
    hiderShower('.hider-shower-button', '.main-nav');

    /**
     * Sticky positioning of elements. You might want to
     * stick a navbar on top of the page when scrolled down.
     */
    var header = document.getElementById('header');
    if (header != null) {
        sticky.stickyPosition('.header');
    }

    /**
     * Smooth scrolling
     */
    $('.top-link').on('click', function(e) {
        $('html, body').animate({
            scrollTop:$(this.hash).offset().top - 60
        }, 500);
        e.preventDefault();
    });
});
