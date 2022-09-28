jQuery(function ($) {

    'use strict';

    // Hot Deals Carousel starts
    
    $('.hot-deals__carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })

    // New Product Carousel starts

    let featuredCarousel = document.querySelectorAll(".new-product__carousel");
    for (let i = 0; i < featuredCarousel.length; i++) {
        console.log($("#featured-carousel-", i + 1));
        $(`#featured-carousel-${i + 1}`).owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        })
    }

    // Selection tab
    $(".new-product__section .section-header__action--tab li").on("click", function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        let idAttribute = $(this).attr("data-id");
        $(".new-product__area").find(".new-product__carousel" + "[data-carousel='" + idAttribute + "']").addClass("active").siblings().removeClass("active");
    });

});

// Trending Offers Carousel starts
$('.trending--offers__carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});

// Featured product Carousel starts

let featuredCarousel = document.querySelectorAll(".featured-product__carousel");
for (let i = 0; i < featuredCarousel.length; i++) {
    console.log($("#featured-product-", i + 1));
    $(`#featured-product-${i + 1}`).owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
}

// Selection tab
$(".featured-product__section .section-header__action--tab li").on("click", function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    let idAttribute = $(this).attr("data-id");
    $(".hot-deals__carousel--area").find(".featured-product__carousel" + "[data-carousel='" + idAttribute + "']").addClass("active").siblings().removeClass("active");
});

// Article Carousel starts
$('.article-category__carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});