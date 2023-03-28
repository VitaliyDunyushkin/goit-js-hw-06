const inputControl = document.getElementById("font-size-control");
const text = document.querySelector("#text");

inputControl.addEventListener("input", handleFontSize);

function handleFontSize(event) {
  text.style.fontSize = `${event.target.value}px`;
}
