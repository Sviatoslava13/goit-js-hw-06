'use strict';
const button = {
  addBtn: document.querySelector('[data-action="increment"]'),
  minusBtn: document.querySelector('[data-action="decrement"]'),
  result: document.querySelector('#value'),
};

let resultBtn = 0;
const increment = () => {
  resultBtn += 1;
  button.result.textContent = resultBtn;
};
const decrement = () => {
  resultBtn -= 1;
  button.result.textContent = resultBtn;
};
button.addBtn.addEventListener('click', increment);
button.minusBtn.addEventListener('click', decrement);
