'use strict';
const itemElement = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemElement.length}`);

const itemElementArray = [...itemElement]
  .map(
    item => `Category: ${item.children[0].textContent}
Elements: ${item.children[1].children.length}`,
  )
  .join('\n');
console.log(itemElementArray);
