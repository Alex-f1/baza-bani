// function layoutOptions() {
//   const layoutOption = document.querySelectorAll(".js-card-project-layout-option")
//   layoutOption.forEach(function(element, index) {
//     element.addEventListener("click", function(event) {
//       event.preventDefault();
//       event.currentTarget.classList.add("_is-active");
//       event.currentTarget.closest(".card-project-layout-options__nav").querySelectorAll(".js-card-project-layout-option").forEach( function(elementInner) {
//         if (element.classList.contains("_is-active")) {
//           elementInner.classList.remove("_is-active");
//         }
//       })
        
//       console.log(event);
//     })
//   })
// } 

// layoutOptions();

const layoutOptionsNavigationScrollbar = new Swiper(".js-layout-options-navigation-scrollbar", {
  direction: "horizontal",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".js-layout-options-navigation-scrollbar .swiper-scrollbar",
    draggable: true
  }

});