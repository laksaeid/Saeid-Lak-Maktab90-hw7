"use strict";

let salaries = {
  John: 100,
  Pete: 300,
  Marssy: 250,
  Mary: 300,
};
const getTop = function (salari) {
  let array = Object.entries(salari);
  array.sort((a, b) => b[1] - a[1]);
  const top = array.filter((value) => value[1] === array[0][1]);
  const [[name, mostSalari], ...other] = top;
  let reachests = array.filter((value) => {
    return value[1] === mostSalari;
  });
  return reachests;
};
console.log(getTop(salaries).join(" \n"));
