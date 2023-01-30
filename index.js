"use strict";
const form = document.querySelector('form');



form.addEventListener('submit', checkValidations);

function checkValidations (e) {
  e.preventDefault();
  console.log(e);
  const firstName = e.target.
}