// nav btn func
const BtnNavEl = document.querySelector(".btn-mobile-nav");
const HeaderEl = document.querySelector(".bbb");
BtnNavEl.addEventListener("click", function () {
  HeaderEl.classList.toggle("nav-open");
});


// fleet-section slider function
const carSlider = new Swiper(".car-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination-custom",
    clickable: false,
  },
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 29,
    },
  },
});

// testimonials-section slider function
// const testSLider = new Swiper(".test-slider", {
//   spaceBetween: 0,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
  
  
// });


