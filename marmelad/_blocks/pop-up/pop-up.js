const aboutService = new HystModal({
  linkAttributeName: "data-popup-modal",
  afterClose: function (modal) {
    document.querySelector(".js-video-popup iframe")
      .setAttribute("src", "");
  },
});

const buttonPlayVideo = document.querySelectorAll(".js-button-play");

buttonPlayVideo.forEach(function(element) {
  element.addEventListener("click", function (event) {
    let getVideoSrc = event.currentTarget.getAttribute('data-video-src');
    document.querySelector(".js-video-popup iframe")
      .setAttribute("src", getVideoSrc);
  })
});