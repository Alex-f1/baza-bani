'use strict';
/* ^^^
 * Viewport Height Correction
 *
 * @link https://www.npmjs.com/package/postcss-viewport-height-correction
 * ========================================================================== */

function setViewportProperty() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

window.addEventListener('resize', setViewportProperty);
setViewportProperty(); // Call the fuction for initialisation

/* ^^^
 * Полифил для NodeList.forEach(), на случай если забыл про IE 11
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
 * ========================================================================== */

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
/* ^^^
 * Scripts
 * ========================================================================== */


function inputFile() {
  var inputs = document.querySelectorAll('.input-file');
  Array.prototype.forEach.call(inputs, function (input) {
    var label = input.nextElementSibling,
        labelVal = label.innerHTML;
    input.addEventListener('change', function (e) {
      var fileName = '';

      if (this.files && this.files.length > 1) {
        fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
      } else {
        fileName = e.target.value.split('\\').pop();
      }

      if (fileName) {
        label.querySelector('span').innerHTML = fileName;
      } else {
        label.innerHTML = labelVal;
      }
    });
  });
}

function phoneMask() {
  const phoneInput = document.querySelectorAll(".phone-mask");
  phoneInput.forEach(function (element) {
    var phoneMask = IMask(element, {
      mask: '+{7} (000)-000-00-00',
      lazy: false,
      placeholderChar: '_'
    });
  });
}

function customSelect() {
  const select = document.querySelectorAll('.js-choice');
  select.forEach(function (element) {
    const choices = new Choices(element, {
      searchEnabled: false
    });
  });
}

if (document.querySelectorAll('.input-file').length) {
  inputFile();
}

if (document.querySelectorAll('.js-choice').length) {
  customSelect();
}

const item = document.querySelectorAll(".hero__item");
const numberZero = item.length + 1 <= 10 ? "0" : "";
const heroSlider = new Swiper(".js-hero-slider", {
  effect: "fade",
  speed: 800,
  rewind: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    prevEl: ".hero .swiper-button-prev",
    nextEl: ".hero .swiper-button-next"
  },
  on: {
    init: function () {
      var index = this.activeIndex + 1;
      document.querySelector(".hero__fraction-current").innerHTML = numberZero + index;
      document.querySelector(".hero__fraction-total").innerHTML = numberZero + item.length;
    }
  }
});
var index;
heroSlider.on('slideChange', function () {
  index = this.activeIndex + 1;
  document.querySelector(".hero__fraction-current").innerHTML = numberZero + index;
  document.querySelector(".hero__fraction-total").innerHTML = numberZero + item.length;
});
/* console.log(index)

heroSlider.on('slidePrevTransitionStart', function () {

  index = index -1;

  

  document.querySelector(".hero__fraction-current")

    .innerHTML = numberZero + index;

  document.querySelector(".hero__fraction-total")

    .innerHTML = numberZero + item.length;



}); */

const mainMenuItem = document.querySelectorAll(".main-menu ul > li");
mainMenuItem.forEach(function (element, index) {
  if (element.children[1]) {
    let createSubMenuTrigger = document.createElement("span");
    element.classList.value = "sub-menu";
    element.appendChild(createSubMenuTrigger);
    element.children[2].classList.value = "sub-menu-trigger";
    let subMenuTrigger = element.children[2];

    if (window.matchMedia("(max-width: 1023px)").matches) {
      subMenuTrigger.addEventListener("click", function (event) {
        event.preventDefault();
        event.currentTarget.parentNode.classList.toggle("_is-active");
      });
    }
  }
});
const ourServicesSlider = new Swiper(".js-our-services-slider", {
  effect: "slide",
  speed: 1000,
  loop: true,
  pagination: {
    el: ".our-services__controls .swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".our-services__controls .swiper-button-next",
    prevEl: ".our-services__controls .swiper-button-prev"
  },
  breakpoints: {
    320: {
      autoHeight: true
    },
    960: {
      autoHeight: false
    }
  }
});
const aboutService = new HystModal({
  linkAttributeName: "data-popup-modal",
  afterClose: function (modal) {
    document.querySelector(".js-video-popup iframe").setAttribute("src", "");
  }
});
const buttonPlayVideo = document.querySelectorAll(".js-button-play");
buttonPlayVideo.forEach(function (element) {
  element.addEventListener("click", function (event) {
    let getVideoSrc = event.currentTarget.getAttribute('data-video-src');
    document.querySelector(".js-video-popup iframe").setAttribute("src", getVideoSrc);
  });
});
const navigationScrollbar = new Swiper(".js-navigation-scrollbar", {
  direction: "horizontal",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".js-navigation-scrollbar .swiper-scrollbar",
    draggable: true
  } // mousewheel: true,

});

function reviewsBlockSliderInit() {
  const reviewBlockSlider = new Swiper(".js-reviews-block-slider", {
    slidesPerView: 1,
    spaceBetween: 50,
    allowTouchMove: false,
    loop: true,
    pagination: {
      el: ".main-swiper-pagination",
      clickable: true
    },
    breakpoints: {
      320: {
        allowTouchMove: true
      },
      1280: {
        allowTouchMove: false
      }
    }
  });
  const buttonPrev = document.querySelector(".js-swiper-button-prev");
  const buttonNext = document.querySelector(".js-swiper-button-next");
  buttonPrev.addEventListener("click", function () {
    reviewBlockSlider.slidePrev();
  });
  buttonNext.addEventListener("click", function () {
    reviewBlockSlider.slideNext();
  });
  const reviewThumbNestedSlider = new Swiper(".js-review-thumb-nested-slider", {
    slidesPerView: 4,
    spaceBetween: 14,
    pagination: {
      el: ".review-thumb__pics .swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".review-thumb__pics .swiper-button-next",
      prevEl: ".review-thumb__pics .swiper-button-prev"
    },
    breakpoints: {
      320: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 4
      }
    }
  });
}

if (document.querySelectorAll(".js-reviews-block-slider").length || document.querySelectorAll(".js-review-thumb-nested-slider").length) {
  reviewsBlockSliderInit();
}

window.addEventListener("scroll", function () {
  let oldScroll = this.oldScroll || 0;
  let newScroll = this.scrollY;

  if (window.scrollY > 50) {
    document.querySelector(".top-panel").classList.add("_is-fixed");
  }

  if (newScroll < oldScroll) {
    document.querySelector(".top-panel").classList.add("_is-top-fixed");
  }

  this.oldScroll = newScroll;

  if (newScroll >= oldScroll) {
    document.querySelector(".top-panel").classList.remove("_is-top-fixed");
  }
});
document.querySelector(".js-button-burger").addEventListener("click", function () {
  this.classList.toggle("_is-active");
  document.querySelector(".main-menu").classList.toggle("_is-active");
});
const buttonFixed = document.querySelectorAll(".button-fixed");
window.addEventListener("scroll", function () {
  buttonFixed.forEach(function (element) {
    if (window.scrollY > 200) {
      element.classList.add("_is-show");
    } else {
      element.classList.remove("_is-show");
    }
  });
});