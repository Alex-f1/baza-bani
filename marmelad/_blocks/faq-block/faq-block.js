function faqBlock() {
  const answer = document.querySelectorAll(".faq-block__answer");

  answer.forEach(function(element) {
    element.querySelectorAll("p").forEach(function (childrenElement) {
      childrenElement.style.display = "block"
    });
    
    let getHeightElement = element.querySelector("p").clientHeight;

    if (window.matchMedia("(max-width: 767px)").matches) {
      if (getHeightElement > 75) {
        element.style.height = 65 + "px";
        element.classList.add("_is-collapsed")

        element.addEventListener("click", function () {
          element.classList.remove("_is-collapsed");
          element.style.height = "auto";
          element.closest(".faq-block__item").style.height = "auto";
        })
      }

      return;
    }

    if (getHeightElement > 75) {
      element.style.height = 98 + "px";
      element.classList.add("_is-collapsed")

      element.addEventListener("click", function () {
        element.classList.remove("_is-collapsed");
        element.style.height = "auto";
      })
    }

    

  });
}

if (document.querySelectorAll(".faq-block").length) {
  faqBlock();
}