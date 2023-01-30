let map = new Map();
map.set("name", "John");
map.set("name1", "John1");
let keys = map.keys();
// Error: keys.push is not a function
// keys.push("more");




//becouse keys in not array and we cannot push them into the array
let newKeys = Array.from(keys);
newKeys.push("more");
console.log(newKeys);

