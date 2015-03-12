define(['jquery'], function($) {
    /**
     * Show a hidden element, also and hide it when clicking out of it
     * @param  {string} trigger The button to show the element
     * @param  {string} el      The element to toggle
     */
    return hiderShower = function(trigger, el) {
        var $trigger = $(trigger),
            $el = $(el);
        $(document).on('click', function(event) {
            // If the trigger element is clicked
            if ($(event.target).closest($trigger).length) {
                $el.toggleClass('active');
                $trigger.toggleClass('active');
            // If anything else than the element is clicked
            } else if (!$(event.target).closest(el).length) {
                $el.removeClass('active');
            }
        });
    }
});
