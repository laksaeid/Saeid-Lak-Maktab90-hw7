"use strict";

let salaries = {
  "John": 100,
  "Pete": 300,
  "Marssy": 250,
  "Mary": 300,
};
const getTop = function (salari) {
  const reachests = [];
  let array = Object.entries(salari);
  array.sort((a,b)=> b[1] - a[1])
  const top = array.filter(value =>  value[1] === array[0][1])
  for (const name of top) {
    reachests.push(name[0]);
  }
  return reachests;
}
console.log(getTop(salaries));