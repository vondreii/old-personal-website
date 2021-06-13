// document.getElementById("brand-hidden").style.visibility = "#272727";

window.onscroll = function() {myFunction()};

 /* undo till here */
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    // document.getElementById("brand-hidden").style.color = "white";
  } else {
    navbar.classList.remove("sticky");
    // document.getElementById("brand-hidden").style.color = "#272727";
  }
}

function searchbar() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("section");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("div")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}