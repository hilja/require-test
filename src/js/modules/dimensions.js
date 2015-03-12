/**
 * Measure window width and print out
 */
define(['jquery'], function($) {
    return {
        widthDisplay: function(resize) {
            var winWidth = $(window).width(),
                winHeight = $(window).height(),
                widthString = '<span class="width" id="width">' + winWidth + 'p ✖ ' + winHeight + 'p</span>';
            if (resize === true) {
                $('#width').html(widthString);
            } else {
                $('#dimensions').html(widthString);
            }
        },
        getAndSetElementHeight: function(sourceEl, targetEl, margin) {
            margin = typeof margin != 'undefined' ? margin : true;
            var $sourceEl = $(sourceEl),
                $targetEl = $(targetEl),
                sourceElH = $sourceEl.outerHeight(margin);
            $targetEl.css('height', sourceElH);
        }
    }
});
