'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divContainer = document.querySelector('#boxes');

let size = 30;

const createBoxes = amount => {
  //console.log('hi', amount);

  const newDivContainer = document.createElement('div');
  newDivContainer.style.background = getRandomHexColor();
  newDivContainer.style.height = size + 'px';
  newDivContainer.style.width = size + 'px';
  newDivContainer.style.margin = '10px';
  newDivContainer.classList.add('box');
  divContainer.append(newDivContainer);
  console.log(newDivContainer);
  size += 10;
};

createBtn.addEventListener('click', createBoxes);

const destroyBoxes = () => {
  const boxDivEl = document.querySelectorAll('.box');

  for (let boxDiv of boxDivEl) {
    divContainer.removeChild(boxDiv);
  }
  size = 30;
};

destroyBtn.addEventListener('click', destroyBoxes);
