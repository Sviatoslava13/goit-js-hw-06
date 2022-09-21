'use strict';

const form = document.querySelector('.login-form');
form.addEventListener('submit', contentSubmit);
function contentSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
   return alert('Please fill in all the fields!');
  } 
    const fornInformation = {
      Email: email.value,  Password: password.value }
    console.log(fornInformation);
   // console.log(`Email: ${email.value}  Password: ${password.value}`);
      event.currentTarget.reset();
  
}


