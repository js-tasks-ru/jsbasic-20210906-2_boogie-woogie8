function hideSelf() {
  let button = document.querySelector(".hide-self-button");
  button.addEventListener("click", function () {
    button.hidden = true;
    console.log(button.hidden);
  });
}

hideSelf();
