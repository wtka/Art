$(function() {
  console.log('Hello Bootstrap5');
});

// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768:{
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992:{
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});