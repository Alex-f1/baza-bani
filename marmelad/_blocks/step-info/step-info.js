function stepInfoSliderInit() {

  const item = document.querySelectorAll(".step-info__item");
  const numberZero = item.length + 1 <= 10 ? "0" : "";

  const stepInfoSlider = new Swiper(".js-step-info-slider", {
    effect: "slide",
    speed: 800,
    spaceBetween: 20,
    // rewind: true,
    autoHeight: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      prevEl: ".step-info .swiper-button-prev",
      nextEl: ".step-info .swiper-button-next",
    },
    on: {
      init: function () {
        var index = this.activeIndex + 1;
        document.querySelector(".step-info__fraction-current")
          .innerHTML = numberZero + index;
        document.querySelector(".step-info__fraction-total")
          .innerHTML = numberZero + item.length;

      },
    },
  });
  var index;

  stepInfoSlider.on('slideChange', function () {
    index = this.activeIndex + 1;
    document.querySelector(".step-info__fraction-current")
      .innerHTML = numberZero + index;
    document.querySelector(".step-info__fraction-total")
      .innerHTML = numberZero + item.length;

  });
  /* console.log(index)
  stepInfoSlider.on('slidePrevTransitionStart', function () {
    index = index -1;
    
    document.querySelector(".step-info__fraction-current")
      .innerHTML = numberZero + index;
    document.querySelector(".step-info__fraction-total")
      .innerHTML = numberZero + item.length;
  
  }); */
}


if (document.querySelectorAll(".js-step-info-slider").length) {
  stepInfoSliderInit();
}