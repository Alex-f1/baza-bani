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


function accessoriesSliderInit() {
  const accessoriesSlider = new Swiper(".js-accessories-block-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next"
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1280: {
        spaceBetween: 30,
        slidesPerView: 3
      }
    }
  });
}

if (document.querySelectorAll(".js-accessories-block-slider").length) {
  accessoriesSliderInit();
}

function layoutOptions() {
  const layoutOption = document.querySelectorAll(".js-card-project-layout-option");
  const layout = document.querySelectorAll(".js-card-project-layout");

  for (let i = 0; i < layoutOption.length; i++) {
    layoutOption[i].addEventListener("click", event => {
      event.preventDefault();
      let layoutOptionChildren = event.target.parentElement.children;

      for (let b = 0; b < layoutOptionChildren.length; b++) {
        layoutOptionChildren[b].classList.remove("_is-active");
      }

      layoutOption[i].classList.add("_is-active");
      let layoutChildren = event.target.closest(".card-project-layout-options__navigation").nextElementSibling.children;

      for (let l = 0; l < layoutChildren.length; l++) {
        layoutChildren[l].classList.remove("_is-show");
      }

      layout[i].classList.add("_is-show");
    });
  }

  const layoutOptionsNavigationScrollbar = new Swiper(".js-layout-options-navigation-scrollbar", {
    direction: "horizontal",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".js-layout-options-navigation-scrollbar .swiper-scrollbar",
      draggable: true
    }
  });
}

if (document.querySelectorAll(".card-project-layout-options").length) {
  layoutOptions();
}

function technologyChoice() {
  const technologyChoice = document.querySelectorAll(".js-technology-choice");
  const technologyChoiceInfo = document.querySelectorAll(".js-technology-choice-info");

  for (let i = 0; i < technologyChoice.length; i++) {
    technologyChoice[i].addEventListener("click", event => {
      let technologyChoiceChildren = event.currentTarget.parentElement.children;

      for (let b = 0; b < technologyChoiceChildren.length; b++) {
        const choiceNote = technologyChoiceChildren[b].querySelector(".card-project-technology-choice__note");
        let getNoteActive = technologyChoiceChildren[b].getAttribute("data-note-active");
        let getNote = technologyChoiceChildren[b].getAttribute("data-note");

        if (!technologyChoiceChildren[b].classList.contains("_is-active")) {
          choiceNote.innerText = getNoteActive;
        } else {
          choiceNote.innerText = getNote;
        }

        technologyChoiceChildren[b].classList.remove("_is-active");
      }

      technologyChoice[i].classList.add("_is-active");
      let technologyChoiceInfoChildren = event.currentTarget.closest(".card-project-technology-choice__navigation").nextElementSibling.children;

      for (let l = 0; l < technologyChoiceInfoChildren.length; l++) {
        technologyChoiceInfoChildren[l].classList.remove("_is-show");
      }

      technologyChoiceInfo[i].classList.add("_is-show");
    });
  }
}

if (document.querySelectorAll(".card-project-technology-choice").length) {
  technologyChoice();
}

function additionalOptions() {
  const additionalOptionsInfoTable = document.querySelector(".card-project-additional-options__info-table");
  const additionalOptionsBottom = document.querySelector(".card-project-additional-options__bottom");
  const buttonMoreCollapse = document.querySelector(".js-button-more-collapse");

  if (additionalOptionsInfoTable.clientHeight > 545) {
    additionalOptionsInfoTable.style.height = 545 + "px";
    additionalOptionsInfoTable.classList.add("_is-collapsed");
    additionalOptionsBottom.classList.add("_is-show");
    buttonMoreCollapse.addEventListener("click", function () {
      additionalOptionsInfoTable.classList.remove("_is-collapsed");
      additionalOptionsBottom.classList.remove("_is-show");
      additionalOptionsInfoTable.style.height = "auto";
    });
  }
}

if (document.querySelectorAll(".card-project-additional-options").length) {
  additionalOptions();
}

function contactsImgMobileSliderInit() {
  const contactsImgMobileSlider = new Swiper(".js-contacts-img-mobile-slider", {
    slidesPerView: 2,
    spaceBetween: 10,
    watchOverflow: true,
    nested: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}

if (document.querySelectorAll(".js-contacts-img-mobile-slider").length) {
  contactsImgMobileSliderInit();
}

function creditChoiceBlock() {
  const creditChoice = document.querySelectorAll(".js-credit-choice");
  const creditChoiceInfo = document.querySelectorAll(".js-credit-choice-info");

  for (let i = 0; i < creditChoice.length; i++) {
    creditChoice[i].addEventListener("click", event => {
      let creditChoiceChildren = event.currentTarget.parentElement.children;
      console.log(creditChoice[i]);

      for (let b = 0; b < creditChoiceChildren.length; b++) {
        creditChoiceChildren[b].classList.remove("_is-active");
      }

      creditChoice[i].classList.add("_is-active");
      let creditChoiceInfoChildren = event.currentTarget.closest(".credit-block__navigation").nextElementSibling.children;

      for (let l = 0; l < creditChoiceInfoChildren.length; l++) {
        creditChoiceInfoChildren[l].classList.remove("_is-show");
      }

      creditChoiceInfo[i].classList.add("_is-show");
    });
  }

  const creditNavigationScrollbar = new Swiper(".js-credit-navigation-scrollbar", {
    direction: "horizontal",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".js-credit-navigation-scrollbar .swiper-scrollbar",
      draggable: true
    }
  });
}

if (document.querySelectorAll(".credit-block").length) {
  creditChoiceBlock();
}

function faqBlock() {
  const answer = document.querySelectorAll(".faq-block__answer");
  answer.forEach(function (element) {
    element.querySelectorAll("p").forEach(function (childrenElement) {
      childrenElement.style.display = "block";
    });
    let getHeightElement = element.querySelector("p").clientHeight;

    if (window.matchMedia("(max-width: 767px)").matches) {
      if (getHeightElement > 75) {
        element.style.height = 65 + "px";
        element.classList.add("_is-collapsed");
        element.addEventListener("click", function () {
          element.classList.remove("_is-collapsed");
          element.style.height = "auto";
          element.closest(".faq-block__item").style.height = "auto";
        });
      }

      return;
    }

    if (getHeightElement > 75) {
      element.style.height = 98 + "px";
      element.classList.add("_is-collapsed");
      element.addEventListener("click", function () {
        element.classList.remove("_is-collapsed");
        element.style.height = "auto";
      });
    }
  });
}

if (document.querySelectorAll(".faq-block").length) {
  faqBlock();
}

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

if (document.querySelectorAll('.phone-mask').length) {
  phoneMask();
}

function galleryBlock() {
  const buttonGalleryPhotos = document.querySelectorAll(".js-button-gallery-photos");
  const galleryPhotos = document.querySelectorAll(".js-gallery-photos");

  for (let i = 0; i < buttonGalleryPhotos.length; i++) {
    buttonGalleryPhotos[i].addEventListener("click", event => {
      event.preventDefault();
      let buttonGalleryPhotosChildren = event.currentTarget.parentElement.children;

      for (let b = 0; b < buttonGalleryPhotosChildren.length; b++) {
        buttonGalleryPhotosChildren[b].classList.remove("_is-active", "button-default--outline");
      }

      buttonGalleryPhotos[i].classList.add("_is-active", "button-default--outline");
      let layoutChildren = event.target.closest(".gallery-block__navigation").nextElementSibling.children;

      for (let l = 0; l < layoutChildren.length; l++) {
        layoutChildren[l].classList.remove("_is-show");
      }

      galleryPhotos[i].classList.add("_is-show");
    });
  }
}

if (document.querySelectorAll(".gallery-block--self").length) {
  galleryBlock();
}

function heroSliderInit() {
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
}

if (document.querySelectorAll(".js-hero-slider").length) {
  heroSliderInit();
}

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

function otherProjectsSliderInit() {
  const otherProjectsSlider = new Swiper(".js-other-projects-slider", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    speed: 800,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next"
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 25
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 25
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 25
      },
      1280: {
        spaceBetween: 50,
        slidesPerView: 3
      }
    }
  });
}

if (document.querySelectorAll(".js-other-projects-slider").length) {
  otherProjectsSliderInit();
}

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
  }
});

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
    watchOverflow: true,
    nested: true,
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

function stepInfoSliderInit() {
  const item = document.querySelectorAll(".step-info__item");
  const numberZero = item.length + 1 <= 10 ? "0" : "";
  const stepInfoSlider = new Swiper(".js-step-info-slider", {
    effect: "slide",
    speed: 800,
    spaceBetween: 20,
    autoHeight: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      prevEl: ".step-info .swiper-button-prev",
      nextEl: ".step-info .swiper-button-next"
    },
    on: {
      init: function () {
        var index = this.activeIndex + 1;
        document.querySelector(".step-info__fraction-current").innerHTML = numberZero + index;
        document.querySelector(".step-info__fraction-total").innerHTML = numberZero + item.length;
      }
    }
  });
  var index;
  stepInfoSlider.on('slideChange', function () {
    index = this.activeIndex + 1;
    document.querySelector(".step-info__fraction-current").innerHTML = numberZero + index;
    document.querySelector(".step-info__fraction-total").innerHTML = numberZero + item.length;
  });
}

if (document.querySelectorAll(".js-step-info-slider").length) {
  stepInfoSliderInit();
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