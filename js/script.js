"use strict";

$(document).ready(function () {
    $('.menu-list__link').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});

$('.logo-block').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500, 'linear');
});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 10) {
            $('.main-header').addClass('stickytop');
        } else {
            $('.main-header').removeClass('stickytop');
        }
    });
});

if (window.innerWidth >= 992) {
    let scene = document.getElementById('scene');
    let parallaxInstance = new Parallax(scene, {
        relativeInput: true
    });
}

const swiper = new Swiper('.testimonials-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});