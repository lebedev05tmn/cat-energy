let togglerButton = document.querySelector(".slider__click");
let togglerBlock = document.querySelector(".slider__toggler");
let imageFirst = document.querySelector(".slider__image--first");
let imageSecond = document.querySelector(".slider__image--second");

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
