"use strict";

const sortArr = function (...arg) {
  let arr = [...arg]
  let flatArr=arr.flat(Infinity);
  flatArr.sort((a, b) => b - a);
  return flatArr;
}
console.log(sortArr([1,2,[5,7],1],[5,8,6,7],[2,3,4],[99,54]));