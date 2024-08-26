// nav btn func
const BtnNavEl = document.querySelector(".btn-mobile-nav");
const HeaderEl = document.querySelector(".header");
BtnNavEl.addEventListener("click", function () {
  HeaderEl.classList.toggle("nav-open");
});