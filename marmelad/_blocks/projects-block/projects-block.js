const navigationScrollbar = new Swiper(".js-navigation-scrollbar", {
  direction: "horizontal",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".js-navigation-scrollbar .swiper-scrollbar",
    draggable: true,
  },
  // mousewheel: true,
});