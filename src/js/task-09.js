'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

const randomClick = () => {
  document.body.style.background = getRandomHexColor();
  span.textContent = getRandomHexColor();
};

button.addEventListener('click', randomClick);
