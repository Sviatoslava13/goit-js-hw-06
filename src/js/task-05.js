'use strict';
const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

/*textInput.addEventListener('input', event => {

  output.textContent = event.currentTarget.value;
});*/

textInput.addEventListener('input', event => {
  if (textInput.value !== '') {
      return  output.textContent = event.currentTarget.value;
  
  } 
  output.textContent = "Anonymous";
  
});

