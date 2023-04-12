function contactsImgMobileSliderInit() {

  const contactsImgMobileSlider = new Swiper(".js-contacts-img-mobile-slider", {
    slidesPerView: 2,
    spaceBetween: 10,
    watchOverflow: true,
    nested: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

if (document.querySelectorAll(".js-contacts-img-mobile-slider").length) {
  contactsImgMobileSliderInit();
}