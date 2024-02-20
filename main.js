// $(document).ready(function () {
//     $(".nav-icon").clickfunction()
//     {
//         $(".full-nav").addclass("open");
//     }
// });

// $(".nav-close").clickfunction()
// {
//     $(".full-nav").removeclass("open");
// };

// $(window).scroll(function () {
//     var sc = $(window).scrollTop();
//     if (sc > 100) {
//         $(",nav").addclass("sticky")
//     }
//     else {
//         $(",nav").removeclass("sticky")
//     }

// });

// $('.bxslider').bxSlider({
//     mode: 'horizontal',
//     moveSlides: 1,
//     slidemargin: 40,
//     InfiniteLoop: true,
//     minSlides: 1,
//     maxSlides: 1,
//     speed: 1200,

// });

// $("#work").magnificPopup({
//     delegate: 'a',
//     type: 'image',
//     gallery: { enabled: true }
// })


$(document).ready(function () {
    $(".nav-icon").click(function() { // Fixed: clickfunction() to click(function()
        $(".full-nav").addClass("open"); // Fixed: addclass to addClass
    });
    
    $(".nav-close").click(function() { // This should be inside the $(document).ready(function(){ ... });
        $(".full-nav").removeClass("open"); // Fixed: removeclass to removeClass
    });

    $(window).scroll(function () {
        var sc = $(window).scrollTop();
        if (sc > 100) {
            $("nav").addClass("sticky"); // Fixed: $(",nav") to $("nav")
        } else {
            $("nav").removeClass("sticky"); // Fixed: removeclass to removeClass
        }
    });

    $('.bxslider').bxSlider({
        mode: 'horizontal',
        moveSlides: 1,
        slideMargin: 40, // Fixed: slidemargin to slideMargin
        infiniteLoop: true, // Fixed: Capitalization, InfiniteLoop to infiniteLoop
        minSlides: 1,
        maxSlides: 1,
        speed: 1200,
    });

    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: { enabled: true }
    });
});
