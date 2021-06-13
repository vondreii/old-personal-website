var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;


$(window).resize(function() {
  if ($(window).width() < 760) {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "100%";
    }
  }
else {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "30%";
    }
 }
});
