/* -----------------------------------------------------
  Script for Progress Bar
  By: Anil Kumar
  Find me on -
  Website: www.anilpandiya.tech
  GitHub: https://github.com/anilpandiya
-------------------------------------------------------- */

$(document).ready(function() {

  $('#pb').progress_fnc();
 
});


(function($) {

  $.fn.progress_fnc = function(options) {
    var settings = $.extend({
      type: 'start'
    }, options);

    var div = $(this);
    var progress = div.find('.cssProgress');

    progress.each(function() {
      var self = $(this);
      var progress_bar = self.find('.cssProgress-bar');
      var progress_label = self.find('.cssProgress-label, .cssProgress-label2');
      var progress_value = progress_bar.data('percent');
      var percentage = parseInt(progress_value, 10) + '%';

      progress_bar.css({'width': '0%', 'transition': 'none', '-webkit-transition': 'none', '-moz-transition': 'none'});

      if(settings.type == 'start') {

        progress_bar.animate({
          width: percentage
        }, {
          duration: 1000,
          step: function(x) {
            progress_label.text(Math.round(x) + '%');
          }
        });
        
      } else if(settings.type == 'reset') {
        progress_bar.css('width', '0%');
        progress_label.text('0%');
      }

    });
  }

}(jQuery));
