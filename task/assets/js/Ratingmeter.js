/* -----------------------------------------------------
  Script for Rating Bar
  By: Anil Kumar
  Find me on -
  Website: www.anilpandiya.tech
  GitHub: https://github.com/anilpandiya
-------------------------------------------------------- */

$(document).ready(function() {
$(".progress").each(function(){
  
    var $bar = $(this).find(".bar");
    var $val = $(this).find("span");
    var perc = parseInt( $val.text(), 10);
  
    $({p:0}).animate({p:perc}, {
      duration: 3000,
      easing: "swing",
      step: function(p) {
        $bar.css({
          transform: "rotate("+ (45+(p*1.8)) +"deg)", 
        });
        $val.text(p|0);
      }
    });
  });

}(jQuery));