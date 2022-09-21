'use strict';
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const imagesContent = document.querySelector('.gallery');

const imagesEl = images
  .map(
    ({ url, alt }) =>
      `<li><img src = "${url}" alt = "${alt}"  width = "200" height = "140" /></li>`,
  )
  .join('');
imagesContent.insertAdjacentHTML('afterbegin', imagesEl);
console.log(imagesEl);

/*images.forEach(element => {
  imagesContent.insertAdjacentHTML(
    'afterbegin',
    `<li><img src = "${element.url}" alt = "${element.alt}"  width = "180" height = "120" /></li>`,
  );
});*/

imagesContent.style.cssText = `
display: flex;
 align-items: center;
justify-content: center;
gap: 30px;
`;
