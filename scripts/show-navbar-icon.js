$(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
        $('#navbar-icon').fadeIn(100);
    } else {
        $('#navbar-icon').fadeOut(100);
    }
 });


var navbarIcon = document.getElementById("navbar-icon");
var barsicon = document.getElementById("icon-bars");
var timesIcon = document.getElementById("icon-times");
var navbarAreaScroll = document.getElementById("navbar-scroll");
var backdrop = document.getElementById("backdrop");

navbarIcon.onclick = function (){
    if (navbarAreaScroll.style.display == "none") {
        barsicon.style.display = "none";
        timesIcon.style.display = "block";
        navbarAreaScroll.style.display = "flex";
        backdrop.style.display = "block";
    }
    else {
        timesIcon.style.display = "none";
        barsicon.style.display = "block";
        navbarAreaScroll.style.display = "none";
        backdrop.style.display = "none";
    }
}

backdrop.onclick = function (){ 
    navbarAreaScroll.style.display = "none";
    backdrop.style.display = "none";
    timesIcon.style.display = "none";
    barsicon.style.display = "block";
}

function hide(id) {
	document.getElementById(id).style.display = "none";
    backdrop.style.display = "none";
}

function show(id) {
	document.getElementById(id).style.display = "block";
}

var btnMore = document.getElementById("btn-more");
var btnLess = document.getElementById("btn-less");
var moreProjects = document.getElementById("more-projects-wrapper");

btnMore.onclick = function (){
    moreProjects.style.display = "block";
    btnLess.style.display = "block";
    btnMore.style.display = "none";
}

btnLess.onclick = function (){
    moreProjects.style.display = "none";
    btnMore.style.display = "block";
    btnLess.style.display = "none";
}

function toggleIcon(){ 
    timesIcon.style.display = "none";
    barsicon.style.display = "block";
}