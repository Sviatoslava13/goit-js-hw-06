'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divRef = document.querySelector("#boxes");
const btnCreateRef = document.querySelector("[data-create]");
const btnDestroyRef = document.querySelector("[data-destroy]");
const inputRef = document.querySelector("input");
let size = 30;

let elements = [];
function createBoxes(amount) {
  for (let i = 0; i <amount; i += 1) {
     const div = document.createElement("div");
  div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    size += 10;
    elements.push(div);
  }
  divRef.append(...elements);
}
btnCreateRef.addEventListener('click', (event) => {
  createBoxes(inputRef.value)
});
btnDestroyRef.addEventListener('click', (event) => {
  divRef.innerHTML = "";
  elements = [];
  size = 30;
});