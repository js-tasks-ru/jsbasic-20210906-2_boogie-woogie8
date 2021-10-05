function initCarousel() {
  let buttonRight = document.querySelector(".carousel__arrow_right");
  let buttonLeft = document.querySelector(".carousel__arrow_left");
  buttonLeft.style.display = "none";
  buttonRight.style.display = "none";
  let carousel = document.querySelector(".carousel__inner");
  let slide = document.querySelector(".carousel__slide");
  let currentWidth = slide.offsetWidth;
  let slideWidth = currentWidth;
  buttonRight.addEventListener("click", function () {
    buttonLeft.style.display = "block";
    carousel.style.transform = "translateX(-" + slideWidth + "px";
    slideWidth += currentWidth;
    console.log(slideWidth);
    if (slideWidth === currentWidth * 4) {
      buttonRight.style.display = "none";
      slideWidth = currentWidth * 3;
    }
  });
  buttonLeft.addEventListener("click", function () {
    buttonRight.style.display = "block";
    slideWidth -= currentWidth;
    if (slideWidth <= currentWidth * 3 || slideWidth >= 0) {
      carousel.style.transform = "translateX(-" + slideWidth + "px";
      console.log(slideWidth);
    }
    if (slideWidth === 0) {
      buttonLeft.style.display = "none";
      slideWidth = currentWidth;
    }
  });
}

initCarousel();
