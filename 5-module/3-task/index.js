function initCarousel() {
  let buttonRight = document.querySelector(".carousel__arrow_right");
  let buttonLeft = document.querySelector(".carousel__arrow_left");
  buttonLeft.style.display = "none";
  //buttonRight.style.display = "none";
  let carousel = document.querySelector(".carousel__inner");
  let slide = document.querySelector(".carousel__slide");
  let currentStep = 0;
  let currentWidth = slide.offsetWidth;
  let slideWidth = currentWidth;

  buttonRight.addEventListener("click", function () {
    currentStep += 1;
    buttonLeft.style.display = "block";
    carousel.style.transform = `translateX(-${slideWidth}px)`;
    slideWidth += currentWidth;
    if (slideWidth === currentWidth * 4) {
      buttonRight.style.display = "none";
      slideWidth = currentWidth * 3;
    }
  });

  buttonLeft.addEventListener("click", function () {
    currentStep -= 1;
    buttonRight.style.display = "block";
    slideWidth -= currentWidth;

    carousel.style.transform = `translateX(-${slideWidth}px)`;

    if (slideWidth === 0) {
      buttonLeft.style.display = "none";
      slideWidth = currentWidth;
    }
  });

  /*
  buttonRight.addEventListener("click", function () {
    buttonLeft.style.display = "block";
    carousel.style.transform = `translateX(-${slideWidth}px`;
    slideWidth += currentWidth;

    if (slideWidth === currentWidth * 4) {
      buttonRight.style.display = "none";
      slideWidth = currentWidth * 3;
    }
  });

  buttonLeft.addEventListener("click", function () {
    buttonRight.style.display = "block";
    slideWidth -= currentWidth;

    if (slideWidth <= currentWidth * 3 || slideWidth >= 0) {
      carousel.style.transform = `translateX(-${slideWidth}px`;
    }

    if (slideWidth === 0) {
      buttonLeft.style.display = "none";
      slideWidth = currentWidth;
    }
  });
  */
}
