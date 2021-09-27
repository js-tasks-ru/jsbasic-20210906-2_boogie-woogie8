function toggleText() {
  let button = document.querySelector(".toggle-text-button");
  let text = document.querySelector("#text");
  button.addEventListener("click", function () {
    console.log(text.hidden);
    if (text.hidden === false) {
      text.hidden = true;
      console.log(text.hidden);
    } else {
      text.hidden = false;
    }
  });
}

toggleText();
