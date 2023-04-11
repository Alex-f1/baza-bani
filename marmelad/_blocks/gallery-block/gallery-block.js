function galleryBlock() {

  const buttonGalleryPhotos = document.querySelectorAll(".js-button-gallery-photos");
  const galleryPhotos = document.querySelectorAll(".js-gallery-photos");

  for (let i = 0; i < buttonGalleryPhotos.length; i++) {
    buttonGalleryPhotos[i].addEventListener("click", (event) => {
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