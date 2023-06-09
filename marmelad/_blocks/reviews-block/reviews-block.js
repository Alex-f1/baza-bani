function reviewsBlockSliderInit() {
  const reviewsBlock = document.querySelector(".reviews-block");
  const hasSingle = reviewsBlock.classList.contains("reviews-block--single") ? false : true;
  const reviewBlockSlider = new Swiper(".js-reviews-block-slider", {
    slidesPerView: 1,
    spaceBetween: 50,
    allowTouchMove: false,
    autoHeight: hasSingle,
    loop: true,    
    pagination: {
      el: ".main-swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      1280: {
        allowTouchMove: false,
      },
    },
  });
  
  const buttonPrev = document.querySelector(".js-swiper-button-prev"); 
  const buttonNext = document.querySelector(".js-swiper-button-next"); 
  
  buttonPrev.addEventListener("click",function () {
    reviewBlockSlider.slidePrev();
  });
  buttonNext.addEventListener("click",function () {
    reviewBlockSlider.slideNext();
  });
  
  
  const reviewThumbNestedSlider = new Swiper(".js-review-thumb-nested-slider", {
    slidesPerView: 4,
    spaceBetween: 14,
    watchOverflow: true,
    nested: true,
    pagination: {
      el: ".review-thumb__pics .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".review-thumb__pics .swiper-button-next",
      prevEl: ".review-thumb__pics .swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
    },
  });
}

if (document.querySelectorAll(".js-reviews-block-slider").length || document.querySelectorAll(".js-review-thumb-nested-slider").length) {
  reviewsBlockSliderInit();
}