// For Responsive and Autoplay
var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

// For Responsive and Autoplay
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});
