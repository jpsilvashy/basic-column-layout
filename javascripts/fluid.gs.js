jQuery.fn.slideFadeToggle = function(speed, easing, callback) {
  return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);  
};

$(document).ready(function() {  
  
  $("#show_grid").toggle(function() {
    $(this).html("hide grid");
    $("#features").slideFadeToggle('slow');
  }, function() {
    $(this).html("show grid");
    $("#features").slideFadeToggle('slow');
  });
  
});
