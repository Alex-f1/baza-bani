window.addEventListener("scroll", function() {
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

document.querySelector(".js-button-burger")
  .addEventListener("click", function() {
    this.classList.toggle("_is-active");
    document.querySelector(".main-menu").classList.toggle("_is-active");
  });