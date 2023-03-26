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

