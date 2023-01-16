<<<<<<< HEAD
=======
$(document).ready(function () {

    $('.project-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>',
    });
    $(window).scroll(function () {
        var scrollposition = $(window).scrollTop()
        console.log(scrollposition)
        if (scrollposition < 100) {
            $("#floating-header").removeClass("op-vi")
        }
        if (scrollposition < 300) {
            $("#gotoTop").removeClass("show")
        }
        if (scrollposition > 300) {
            $("#floating-header").addClass("op-vi")
            $("#gotoTop").addClass("show")
        }
        if (scrollposition < 500) {
            $("#header .menu ul li:nth-child(1) a").addClass("active")
            $("#header .menu ul li:nth-child(2) a").removeClass("active")
            $("#floating-header .menu ul li:nth-child(1) a").addClass("active")
            $("#floating-header .menu ul li:nth-child(2) a").removeClass("active")
        }
        if (scrollposition > 500) {
            $("#header .menu ul li:nth-child(1) a").removeClass("active")
            $("#header .menu ul li:nth-child(2) a").addClass("active")
            $("#floating-header .menu ul li:nth-child(1) a").removeClass("active")
            $("#floating-header .menu ul li:nth-child(2) a").addClass("active")
        }
        if (scrollposition < 1000) {
            $("#header .menu ul li:nth-child(3) a").removeClass("active")
            $("#floating-header .menu ul li:nth-child(3) a").removeClass("active")
        }
        if (scrollposition > 1000) {
            $("#header .menu ul li:nth-child(2) a").removeClass("active")
            $("#header .menu ul li:nth-child(3) a").addClass("active")
            $("#floating-header .menu ul li:nth-child(2) a").removeClass("active")
            $("#floating-header .menu ul li:nth-child(3) a").addClass("active")
        }
        if (scrollposition < 2000) {
            $("#header .menu ul li:nth-child(4) a").removeClass("active")
            $("#floating-header .menu ul li:nth-child(4) a").removeClass("active")
        }
        if (scrollposition > 2000) {
            $("#header .menu ul li:nth-child(3) a").removeClass("active")
            $("#header .menu ul li:nth-child(4) a").addClass("active")
            $("#floating-header .menu ul li:nth-child(3) a").removeClass("active")
            $("#floating-header .menu ul li:nth-child(4) a").addClass("active")

        }

    })
    $(window).load(function () {
        // $(window).scrollTop(0)
        $("#header .menu ul li:nth-child(1) a").addClass("active")
        $("#floating-header .menu ul li:nth-child(1) a").addClass("active")
    })
    $("#gotoTop button").on('click', function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 500)
    })
    // show handbar menu
    $("#floating-header .hand-bar button").on('click', function () {
        $("#floating-header .menu ul").toggleClass("op-vi")
        $("#floating-header .menu ul").toggleClass("animate")
        $("#floating-header #bar-icon2").toggleClass("op-vi")
        $("#floating-header #bar-icon1").toggleClass("di-n")
    })
})
// --> about section js
function show(v1, v2, v3, v4, v5) {
    v1 = "#about .about-slider .about-content-slider ." + v1
    v2 = "#about .about-slider .about-content-slider ." + v2
    v3 = "#about .about-slider .about-content-slider ." + v3
    v4 = "#about .about-slider .about-content-slider ." + v4
    v5 = "#about .about-slider .about-content-slider ." + v5
    $(v1).removeClass('display-none')
    $(v2).addClass('display-none')
    $(v3).addClass('display-none')
    $(v4).addClass('display-none')
    $(v5).addClass('display-none')
}
function show(v1, v2, v3, v4, v5) {
    v1 = "#about .about-slider .about-menu-slider ul #" + v1
    v2 = "#about .about-slider .about-menu-slider ul #" + v2
    v3 = "#about .about-slider .about-menu-slider ul #" + v3
    v4 = "#about .about-slider .about-menu-slider ul #" + v4
    v5 = "#about .about-slider .about-menu-slider ul #" + v5
    console.log(v1)
    $(v1).addClass('active')
    $(v2).removeClass('active')
    $(v3).removeClass('active')
    $(v4).removeClass('active')
    $(v5).removeClass('active')
}
>>>>>>> 45ea4e53cdefacdee53d0d7706ee9af7ada0e5d5
