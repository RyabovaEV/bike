'use strict'

const body = document.body;
const burger = document.querySelector(".burger");
const menuBoby = document.querySelector(".menu__body");
const headerRowLogo = document.querySelector('.headerRow__logo');
const headerRow = document.getElementById("headerRow");
const menu = document.querySelectorAll(".menu__link");
const slider = document.querySelectorAll(".slider__link");
const sliderItem = document.querySelectorAll(".twitterContent__item");

//slider

slider.forEach(sliderShow);

function sliderShow(item) {
    item.addEventListener('click', function() {
        let numberSlider = item.getAttribute("data-slider");
        let currentTwit = document.getElementById(numberSlider);

        if (!item.classList.contains('slider__link-active')) {
            slider.forEach(item => {
                item.classList.remove("slider__link-active");
            });

            sliderItem.forEach(item => {
                item.classList.remove("twitterContent__item-active");
            });

            item.classList.add("slider__link-active");
            currentTwit.classList.add("twitterContent__item-active");
        }

    });
};
document.querySelector('.slider__link').click();


//burger
let massivConst = [body, burger, menuBoby]

burger.addEventListener('click', function() {
    if (body.classList.contains('active')) {
        closeBurger();
    } else {
        showBurger();
    }
});

function showBurger() {
    massivConst.forEach(item => {
        item.classList.add('active')
    });
};

function closeBurger() {
    massivConst.forEach(item => {
        item.classList.remove('active')
    });
};

//sticky menu
window.onscroll = function() {
    checkMarginToTop();
};

let sticky = headerRow.offsetTop;

function checkMarginToTop() {
    if (window.pageYOffset > sticky) {
        headerRow.classList.add("sticky");
        burger.classList.add("sticky");
        menu.forEach(item => {
            item.classList.add("sticky");
        });
    } else {
        headerRow.classList.remove("sticky");
        burger.classList.remove("sticky");
        menu.forEach(item => {
            item.classList.remove("sticky")
        });
    };
};