$(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
        $('#navbar-icon').fadeIn(100);
    } else {
        $('#navbar-icon').fadeOut(100);
    }
 });


var navbarIcon = document.getElementById("navbar-icon");
var navbarAreaScroll = document.getElementById("navbar-scroll");

navbarIcon.onclick = function (){
    if (navbarAreaScroll.style.display == "none")
        navbarAreaScroll.style.display = "flex";
    else
        navbarAreaScroll.style.display = "none";
}

var navbarLink = document.getElementById("nav-link");
navbarLink.onclick = function () {
    navbarAreaScroll.style.display = "none";
    console.log("hi");
}