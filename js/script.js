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

let menuOpened = false;
let burgerMenu = document.querySelector('.burger-menu');
let first = document.querySelector('.top-line');
let second = document.querySelector('.middle-line');
let third = document.querySelector('.bottom-line');
let hiddenMenu = document.querySelector('.hidden-nav-block');

burgerMenu.addEventListener('click', () => {
    if (menuOpened == false) {
        document.body.classList.add('body-blocked');
        burgerMenu.classList.add('change');
        burgerMenu.classList.remove('close');
        hiddenMenu.style.display = "block";
        menuOpened = true;
    } else if (menuOpened == true) {
        document.body.classList.remove('body-blocked');
        burgerMenu.classList.add('close');
        burgerMenu.classList.remove('change');
        hiddenMenu.style.display = "none";
        menuOpened = false;
    };
});

$(document).ready(function () {
    $('.hidden-menu-list__link').on('click', function (e) {
        e.preventDefault();
        $('.burger-menu').addClass('close').removeClass('change');
        $('body').removeClass('body-blocked');
        $(".hidden-nav-block").fadeToggle(300);
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
        menuOpened = false;
    });
});

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