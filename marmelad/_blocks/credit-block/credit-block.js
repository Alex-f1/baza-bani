function creditChoiceBlock() {

  const creditChoice = document.querySelectorAll(".js-credit-choice");
  const creditChoiceInfo = document.querySelectorAll(".js-credit-choice-info");

  for (let i = 0; i < creditChoice.length; i++) {
    creditChoice[i].addEventListener("click", (event) => {
      let creditChoiceChildren = event.currentTarget.parentElement.children;
      console.log(creditChoice[i])
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