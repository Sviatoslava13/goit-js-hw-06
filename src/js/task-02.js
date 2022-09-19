'use strict';
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const productElementContainer = document.querySelector('#ingredients');
const productItem = ingredients => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredients;
  itemEl.classList.add('item');
  return itemEl;
};
const elements = ingredients.map(productItem);
console.log(elements);
productElementContainer.append(...elements);
