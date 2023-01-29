"use strict";
let array = ["nap", "teachers", "cheaters", "PAN","SAEid" ,"saeid" ,"ear", "era", "hectares"];
const aclean = function (arr) {
  const uniqueNames = [];
  const lowerArr = arr.map(val => val.toLowerCase());
  const sortVal = lowerArr.map(val => [val.split('').sort().join(''), val])
  const unique = new Map(sortVal);
  for (const [key , value] of unique.entries()) {
  uniqueNames.push(value);
}
  return uniqueNames.join('\n');
}
console.log(aclean(array));