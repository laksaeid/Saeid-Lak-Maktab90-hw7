"use strict";
const form = document.querySelector('form');
const email = document.getElementById('email');
const firstName = document.getElementById('fName');
const lastName = document.getElementById('lName');
const middleName = document.getElementById('mName');
const password = document.getElementById('pass');
const retype = document.getElementById('retype');

form.addEventListener('submit', checkValidations);

function checkValidations (e) {
  e.preventDefault();
  const errors = document.querySelectorAll('.error');
  errors.forEach(msg => {
  msg.remove();
  })

  let validationCounter = 0;
  validateEmail(email.value) && validationCounter++;
  NameValidator(firstName, firstName.value) && validationCounter++;
  NameValidator(lastName, lastName.value) && validationCounter++;
  NameValidator(middleName, middleName.value) && validationCounter++;
  passwordValidator(password, password.value) && validationCounter++;
  retypeValidator(retype, retype.value , password.value) && validationCounter++;
  
 validationCounter === 6 && console.log(`${firstName.value}\n${lastName.value}\n${middleName.value}\n${email.value}`); 














}



function passwordValidator(element, input) {
  if (input.search(/[0-9]/) || input.search(/[a-z]/) < 0 || input.length < 6) {
    element.after(errorMsg('password must be at least 6 characters and contain at least one letter'))
  } else {
    return true;
  }
  
}

function retypeValidator(element, input,pass) {
  if (!(input === pass)) {
    element.after(errorMsg('password not match'))
  } else {
    return true;
  }

}

function NameValidator(element,input) {
  if (input.length < 3) {
    element.after(errorMsg(`${element.previousElementSibling.innerHTML} must be at least 3 characters`))
  } else {
    return true;
  }
}

function validateEmail(inputEmail) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!inputEmail.match(mailformat)) {
    const error = document.createElement('p');
    error.className = 'error';
    error.innerHTML = 'invalid email address';
    email.after(error);
  }
  else {
    return true;
  }
}

function errorMsg(msg) {
  const error = document.createElement('p');
  error.className = 'error';
  error.innerHTML = msg;
  return error;
}
