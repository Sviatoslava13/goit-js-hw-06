'use strict';

const form = document.querySelector('.login-form');
form.addEventListener('submit', contentSubmit);
function contentSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
  }
  console.log(`Login: ${email.value}  Password: ${password.value}`);
  event.currentTarget.reset();
}
