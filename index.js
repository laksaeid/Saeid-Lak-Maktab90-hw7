"use strict";
const form = document.querySelector('form');
const email = document.getElementById('email');
const firstName = document.getElementById('fName');
const lastName = document.getElementById('lName');
const middleName = document.getElementById('mName');
const password = document.getElementById('pass');
const retype = document.getElementById('retype');
const phone = document.getElementById('phone1');
const gender = document.querySelectorAll('#radio');
const course = document.querySelector('#course');
const address = document.querySelector('#address');
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
  phoneVallidator(phone, phone.value) && validationCounter++;
  genderValidator(gender) && validationCounter++;
  courseValidator(course, course.value) && validationCounter++;

  let user;
  if (validationCounter === 9) {
    user = {
      firstName: firstName.value,
      lastName: lastName.value,
      middleName: middleName.value,
      email: email.value,
      phoneNumber: phone.value,
      password: password.value,
      gender: genderValidator(gender),
      address: address.value
    }
  }
  console.log(user);

}

function courseValidator(element, input) {
  if (input === "choose course") {
    element.parentElement.after(errorMsg('please select your course'));
  } else {
    return true;
  }
}

function genderValidator(elements) {

  let gender1 = Array.from(elements).find(element => { 
   return element.checked === true
  })
  if (!gender1) {
    elements[0].parentElement.after(errorMsg('phone number must be at least 10 characters and just numbers'))
  } else {
    return gender1.value;
  }
  // if (!gender1) {
  //   gender[0].
  // }
}

function phoneVallidator(element, input) {
  let regex=/^[0-9]+$/;
  if ( !input.match(regex) || input.length < 10  ) {
    element.after(errorMsg('phone number must be at least 10 characters and just numbers'))
  } else {
    return true
  }
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
