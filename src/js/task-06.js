'use strict';
const textInput = document.querySelector('#validation-input');
textInput.addEventListener('blur', containerTextInput);

function containerTextInput(e) {
  const maxLength = e.target.dataset.length;

  const valueInput = e.target.value.length;

  if (+valueInput === +maxLength) {
    e.target.classList.add('valid');
    e.target.classList.remove('invalid');
  }
  if (+valueInput < maxLength || +valueInput > maxLength) {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
  }
}
