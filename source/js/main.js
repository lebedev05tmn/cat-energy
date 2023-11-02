let burgerButton = document.querySelector(".burger");
let siteMenu = document.querySelector(".site-menu");
let closeButton = document.querySelector(".close");
let togglerButton = document.querySelector(".slider__click");
let togglerBlock = document.querySelector(".slider__toggler");
let imageFirst = document.querySelector(".slider__image--first");
let imageSecond = document.querySelector(".slider__image--second");

burgerButton.onclick = function () {
    siteMenu.classList.add("site-menu--mobile");
    burgerButton.classList.add("visually-hidden");
    closeButton.classList.remove("visually-hidden");
};

closeButton.onclick = function () {
    siteMenu.classList.remove("site-menu--mobile");
    burgerButton.classList.remove("visually-hidden");
    closeButton.classList.add("visually-hidden");
};
togglerButton.onclick = function () {
    if (togglerBlock.classList.contains("slider__margin-1")) {
        togglerBlock.classList.remove("slider__margin-1");
        togglerBlock.classList.add("slider__margin-2");
        imageFirst.classList.add("visually-hidden");
        imageSecond.classList.remove("visually-hidden");
    } else {
        togglerBlock.classList.remove("slider__margin-2");
        togglerBlock.classList.add("slider__margin-1");
        imageSecond.classList.add("visually-hidden");
        imageFirst.classList.remove("visually-hidden");
    }
};
