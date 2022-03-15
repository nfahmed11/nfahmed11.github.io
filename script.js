// let app = document.getElementById("app");

// let typewriter = new Typewriter(app, {
//   loop: true,
// });

// typewriter
//   .typeString("Hello World!")
//   .pauseFor(2500)
//   .deleteAll()
//   .typeString("Strings can be removed")
//   .pauseFor(2500)
//   .deleteChars(7)
//   .typeString("<strong>altered!</strong>")
//   .pauseFor(2500)
//   .start();

// *************submit button hover color controls ************* //

let submitHover = document.querySelector(".submit-button");
let formInputs = document.querySelectorAll("input");
let textarea = document.querySelector("textarea");
let formBackground = document.querySelector(".contact-form");

submitHover.addEventListener("mouseover", function onMouseover() {
  formInputs.forEach((input) => input.classList.remove("pinkShadow"));
  formInputs.forEach((input) => input.classList.add("blueShadow"));
  textarea.classList.remove("pinkShadow");
  textarea.classList.add("blueShadow");
  formBackground.style.backgroundColor = "#b2ecf2";
});

submitHover.addEventListener("mouseout", function onMouseout() {
  formInputs.forEach((input) => input.classList.remove("blueShadow"));
  formInputs.forEach((input) => input.classList.add("pinkShadow"));
  textarea.classList.remove("blueShadow");
  textarea.classList.add("pinkShadow");
  formBackground.style.backgroundColor = "#FBC7CC";
});
