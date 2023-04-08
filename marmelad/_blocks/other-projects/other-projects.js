function otherProjectsSliderInit() {
  const otherProjectsSlider = new Swiper(".js-other-projects-slider", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    speed: 800,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1280: {
        spaceBetween: 50,
        slidesPerView: 3,
      },
    },
  });
}
if (document.querySelectorAll(".js-other-projects-slider").length) {
  otherProjectsSliderInit();
}