// Array.prototype.forEach();

// ONLY on Arrays and some array like objects, nodeLists.
const myArray = [-10, -20, -30, -40, -50];

// ALWAYS RETURNS UNDEFINED

// arr.forEach(function (item, index, array) {
//   console.log(item + 100, index, array);
// });

const add100 = arr => {
  const result = [];
  arr.forEach(function (item) {
    let v = item + 100;
    result.push(v);
  });
  return result;
};

// console.log(add100(myArray));

const lottery = digits => {
  const result = [];
  for (let i = 0; i < digits; i++) {
    result.push(Math.floor(Math.random() * 99 + 1));
  }
  return result;
};

// number between 0-99

console.log("lottery 6: ", lottery(6));

//  [3, 17, 45, 32, 55, 66]

console.log("lottery 3: ", lottery(3));

//  [32, 33, 2]

const reverseArray = arr => {
  //return the array reversed
  return arr.reverse();
};

reverseArray(["a", "b", "c"]); //["c", "b", "a"]

//reverse a string
const reverseStr = str => {
  return str.split("").reverse().join("");
};

// or
const reverseStr = str => str.split("").reverse().join("");

reverseStr("god"); //"dog"
reverseStr("civic"); //"civic"
reverseStr("racecar"); //"racecar"
