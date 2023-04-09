function layoutOptions() {

  const layoutOption = document.querySelectorAll(".js-card-project-layout-option");
  const layout = document.querySelectorAll(".js-card-project-layout");

  for (let i = 0; i < layoutOption.length; i++) {
    layoutOption[i].addEventListener("click", (event) => {
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
    technologyChoice[i].addEventListener("click", (event) => {
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
    additionalOptionsInfoTable.classList.add("_is-collapsed")
    additionalOptionsBottom.classList.add("_is-show")
  
    buttonMoreCollapse.addEventListener("click", function () {
      additionalOptionsInfoTable.classList.remove("_is-collapsed");
      additionalOptionsBottom.classList.remove("_is-show");
      additionalOptionsInfoTable.style.height = "auto";
    })
  }
}

if (document.querySelectorAll(".ard-project-additional-options").length) {
  additionalOptions();
}