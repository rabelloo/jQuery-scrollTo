/*
    Scrolling to elements made easy
    
    Author: André Luiz Rabêllo
    Version: 1.0.0
*/

; (function($) {
  'use strict';
  
  // Define function
  function scrollTo (selector, duration) {
    // Settings
    var settings = $.extend({
      selector: this,
      duration: 500,
      margin: 0
    }, $.isPlainObject(selector) ? selector : {});
    
    // Overload check
    if (!$.isPlainObject(selector) && selector !== undefined) {
      // Both params overload
      if ($.isNumeric(duration)) {
        settings.selector = selector;
        settings.duration = duration;
      }
      else if (duration === undefined) {
        // Only duration overload
        if ($.isNumeric(selector))
          settings.duration = selector;
        // Only selector overload
        else
          settings.selector = selector;
      }
    }

    // Get offset
    var offset = $(settings.selector).offset();

    // Check for empty jQuery objects
    if (!offset)
        return this;

    // Animate scroll
    $('html, body').animate({
        scrollTop: offset.top
    }, +settings.duration >= 0 ? settings.duration : 500);

    return this;
  };
  
  // Check for .scrollTo existence (avoid conflicts)
  if ($.fn.scrollTo === undefined)
    $.fn.scrollTo = scrollTo;
  else
    $.fn.scrollToElement = scrollTo;
  
})(jQuery);
