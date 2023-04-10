function accessoriesSliderInit() {
  const accessoriesSlider = new Swiper(".js-accessories-block-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  });
}
if (document.querySelectorAll(".js-accessories-block-slider").length) {
  accessoriesSliderInit();
}