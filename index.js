let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
const unique = function (arr) {
  let newArr =new Set(arr);
  return [...newArr];
}
console.log(unique(values));