$("document").ready(function() {
    $(".carousel").carousel({
        interval: 4000
    });

    // Nice Scroll
    $("html").niceScroll({
        cursorwidth: "10px",

        cursorcolor: "#111",
        cursorborder: "1px solid #333",
    });



    // Show Color Option Div
    $(".cog-edit").click(function() {
        $(".color-option").slideToggle();
    })

    // Change Thame color on click
    var colorLi = $(".color-option ul li");

    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#337ab7").end()
        .eq(2).css("backgroundColor", "#009688").end()
        .eq(3).css("backgroundColor", "#E74C3C").end()
        .eq(4).css("backgroundColor", "#A710A1");


    colorLi.click(function() {

        $("link[href*='theme']").attr("href", ($(this).attr('data-value')))

        // console.log($(this).attr("data-value"))
    })



    var scrollButton = $("#scroll");
    $(window).scroll(function() {
        $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();

        // if ($(this).scrollTop() >= 700) {
        //     scrollButton.show();
        // } else {
        //     scrollButton.hide();
        // }
        console.log($(this).scrollTop())

    })

    // Click On The Button To Scroll Top
    scrollButton.click(function() {
        $("html,body").animate({ scrollTop: 0 }, 500)

    })
})

// Loading screen
$(window).on('load', function() {
    $("body").css("overflow", "auto");
    $(".loading-overlay .sk-chase").fadeOut(1000);
    $(".loading-overlay").fadeOut(2500, function() {
        $(this).remove();
    });


})