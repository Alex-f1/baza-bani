const ourServicesSlider = new Swiper(".js-our-services-slider", {
  effect: "slide",
  speed: 1000,
  loop: true,
  pagination: {
    el: ".our-services__controls .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".our-services__controls .swiper-button-next",
    prevEl: ".our-services__controls .swiper-button-prev",
  },
  breakpoints: {
    320: {
      autoHeight: true,
    },
    960: {
      autoHeight: false,
    },
  },
  
});