const inputName = document.getElementById("name-input");
const spanOutput = document.getElementById("name-output");

inputName.addEventListener("input", handleInput);

function handleInput() {
  if (inputName.value !== "") {
    spanOutput.textContent = inputName.value.trim();
  } else {
    spanOutput.textContent = "Anonymous";
  }
}
