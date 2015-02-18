/**
 * Show a hidden element, also and hide it when clicking out of it
 * @param  {string} trigger The button to show the element
 * @param  {string} el      The element to toggle
 */
define(['jquery'], function() {
    return hiderShower = function(trigger, el) {
        var $cog = $(trigger),
            $overlaySettings = $(el);
        $(document).on('click', function(event) {
            // If the trigger element is clicked
            if ($(event.target).closest(trigger).length) {
                $overlaySettings.toggleClass('active');
                $cog.toggleClass('animate-on-click');
            // If anything else than the element is clicked
            } else if (!$(event.target).closest(el).length) {
                $overlaySettings.removeClass('active');
            }
        });
    }
});
