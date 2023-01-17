$(document).ready(function () {

    // PRELOADER SECTION  ACTIVATED CODE START
    $(window).load(function () {
        $("#preloader").fadeOut();
    });
    // PRELOADER SECTION  ACTIVATED CODE END

    // FOR FIXED THE HEADER SECTION AFTER SCROLLING START
    $(window).scroll(function () {
        var scrollPostion = $(window).scrollTop();
        console.log(scrollPostion);
        if (scrollPostion > 500) {
            $(".header").addClass("fixed");
        }
        else {
            $(".header").removeClass("fixed");
        }
    });
    // FOR FIXED THE HEADER SECTION AFTER SCROLLING END

});

