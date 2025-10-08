$(document).ready(function() {
    $(".nav__btn").click(function() {
        $(".mobilemenu").toggleClass("active")
    }), $(".mobilemenu .fa-times").click(function() {
        $(".mobilemenu").removeClass("active")
    })
}), 
$("#group-1").is(":checked"), $(document).ready(function() {
    $(".news-slider").slick({
        dots: !1,
        infinite: !0,
        speed: 300,
        arrows: !1,
        autoplay: !0,
        autoplaySpeed: 1e3,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: !0,
                dots: !1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    })
});
var accordion = new Accordion({
    element: "#example"
});
accordion = new Accordion({
    element: "#example2"
});
$(".dropdown-menu a.dropdown-toggle").on("click", function(o) {
    return $(this).next().hasClass("show") || $(this).parents(".dropdown-menu").first().find(".show").removeClass("show"), $(this).next(".dropdown-menu").toggleClass("show"), $(this).parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown", function(o) {
        $(".dropdown-submenu .show").removeClass("show")
    }), !1
}), $(document).ready(function() {
    $(window).scroll(function() {
        $(window).scrollTop() >= 100 ? $("header").addClass("fixed") : $("header").removeClass("fixed")
    })
}), $(document).ready(function() {
    $("form").submit(function() {
        swal({
            title: "Thank you",
            text: "Our team will contact you shortly.",
            icon: "success"
        }).then(function() {
            location.reload()
        })
    })
});

$(document).ready(function() {
    $(".nav__btn").click(function() {
        $("body").addClass("active")
    }), 
    $(".mobilemenu .fa-times").click(function() {
    $("body").removeClass("active")
    })
})