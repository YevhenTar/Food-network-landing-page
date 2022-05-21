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
let first = document.querySelector('.top-line');
let second = document.querySelector('.middle-line');
let third = document.querySelector('.bottom-line');
let hiddenMenu = document.querySelector('.hidden-nav__block');

window.addEventListener('click', () => {
    if (menuOpened == false) {
        console.log('Opening...');
        // hiddenMenu.style.display = "block";
        first.style.marginTop = '10px';
        second.style.marginTop = '-2px';
        second.style.transform = 'scale(0)';
        third.style.marginTop = '-9px';
        window.setTimeout(() => {
            first.style.transform = 'rotate(-135deg)';
            third.style.transform = 'rotate(-225deg)';
        }, 1000);
        menuOpened = true;
    } else if (menuOpened == true) {
        console.log('Closing...');
        // hiddenMenu.style.display = "none";
        first.style.transform = 'rotate(0deg)';
        third.style.transform = 'rotate(0deg)';
        window.setTimeout(() => {
            first.style.marginTop = '0px';
            second.style.marginTop = '7px';
            second.style.transform = 'scale(1)';
            third.style.marginTop = '7px';
        }, 1000);
        menuOpened = false;
    };
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