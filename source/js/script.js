let navMain = document.querySelector(".header__nav");
let navToggle = document.querySelector(".header__button");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("header-nav--closed")) {
    navMain.classList.remove("header-nav--closed");
    navMain.classList.add("header-nav--opened");
  } else {
    navMain.classList.add("header-nav--closed");
    navMain.classList.remove("header-nav--opened");
  }
});
