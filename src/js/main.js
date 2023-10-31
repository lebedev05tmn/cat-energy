let burgerButton = document.querySelector(".burger");
let siteMenu = document.querySelector(".site-menu");
let closeButton = document.querySelector(".close");

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
