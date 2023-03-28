const button = document.querySelector(".change-color");
const text = document.querySelector(".color");
const body = document.querySelector("body");

button.addEventListener("click", handleBodyColor);

function handleBodyColor() {
  body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
