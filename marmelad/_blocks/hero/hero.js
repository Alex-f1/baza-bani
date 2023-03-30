const item = document.querySelectorAll(".hero__item");
const numberZero = item.length + 1 <= 10 ? "0" : "";

const heroSlider = new Swiper(".js-hero-slider", {
  effect: "fade",
  speed: 800,
  rewind: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".hero .swiper-button-prev",
    nextEl: ".hero .swiper-button-next",
  },
  on: {
    init: function () {
      var index = this.activeIndex + 1;
      document.querySelector(".hero__fraction-current")
        .innerHTML = numberZero + index;
      document.querySelector(".hero__fraction-total")
        .innerHTML = numberZero + item.length;

    },
  },
});
var index;

heroSlider.on('slideChange', function () {
  index = this.activeIndex + 1;
  document.querySelector(".hero__fraction-current")
    .innerHTML = numberZero + index;
  document.querySelector(".hero__fraction-total")
    .innerHTML = numberZero + item.length;

});
/* console.log(index)
heroSlider.on('slidePrevTransitionStart', function () {
  index = index -1;
  
  document.querySelector(".hero__fraction-current")
    .innerHTML = numberZero + index;
  document.querySelector(".hero__fraction-total")
    .innerHTML = numberZero + item.length;

}); */