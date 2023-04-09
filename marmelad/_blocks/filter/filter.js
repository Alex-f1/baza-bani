function filterNavigation() {
  const filterNavigationScrollbar = new Swiper(".js-filter-navigation-scrollbar", {
    direction: "horizontal",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".js-filter-navigation-scrollbar .swiper-scrollbar",
      draggable: true
    }
  });

}

if (document.querySelectorAll(".js-filter-navigation-scrollbar").length) {
  filterNavigation();
}
