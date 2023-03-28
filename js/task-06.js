const input = document.getElementById("validation-input");

input.addEventListener("blur", handleInputFocusOff);

function handleInputFocusOff(event) {
  if (
    Number(event.currentTarget.value.length) === Number(input.dataset.length)
  ) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }

  if (input.value === "") {
    input.classList.remove("valid", "invalid");
  }
}
