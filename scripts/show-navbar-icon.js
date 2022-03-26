$(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
        $('#navbar-icon').fadeIn(100);
    } else {
        $('#navbar-icon').fadeOut(100);
    }
 });