const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const getValue = document.querySelector("#value");

let counterValue = 0;

const handleDecBtnClick = () => {
  counterValue -= 1;
  getValue.textContent = counterValue;
};

const handleIncBtnClick = () => {
  counterValue += 1;
  getValue.textContent = counterValue;
};

decBtn.addEventListener("click", handleDecBtnClick);

incBtn.addEventListener("click", handleIncBtnClick);
