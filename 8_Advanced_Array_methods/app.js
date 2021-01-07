// Array.prototype.forEach();

// // ONLY on Arrays and some array like objects, nodeLists.
// const myArray = [-10, -20, -30, -40, -50];

// // ALWAYS RETURNS UNDEFINED

// // arr.forEach(function (item, index, array) {
// //   console.log(item + 100, index, array);
// // });

// const add100 = arr => {
//   const result = [];
//   arr.forEach(function (item) {
//     let v = item + 100;
//     result.push(v);
//   });
//   return result;
// };

// // console.log(add100(myArray));

// const lottery = digits => {
//   const result = [];
//   for (let i = 0; i < digits; i++) {
//     result.push(Math.floor(Math.random() * 99 + 1));
//   }
//   return result;
// };

// // number between 0-99

// console.log("lottery 6: ", lottery(6));

// //  [3, 17, 45, 32, 55, 66]

// console.log("lottery 3: ", lottery(3));

// //  [32, 33, 2]

// const reverseArray = arr => {
//   //return the array reversed
//   return arr.reverse();
// };

// reverseArray(["a", "b", "c"]); //["c", "b", "a"]

// //reverse a string
// const reverseStr = str => {
//   return str.split("").reverse().join("");
// };

// // or
// const reverseStr = str => str.split("").reverse().join("");

// reverseStr("god"); //"dog"
// reverseStr("civic"); //"civic"
// reverseStr("racecar"); //"racecar"

// const animals = ["cat", "dog", "fish", "racoon", "bear", "lion"];

// let val;
// val = animals.includes("fish"); //true
// val = animals.includes("fox"); // false

// val = animals.join("-");

// val = animals.toString();

// val = animals.indexOf("racoon"); //  3
// val = animals.indexOf("justin"); // -1

// // val = animals.lastIndexOf("fish"); // 2

// console.log(val);

// Array.prototype.map()
// The map() method:  creates a new array in memory of equal size, then runs the call back function on each iteration and pushes the results into the new array and return the array.

const names = ["justin", "mendel", "yehuda"];

var x = ["justin", "mendel", "yehuda"].map(item => "Mr. " + item);

// console.log(x);

var z = [1, 2, 3];

var t = [...z];

t.push(5);

// console.log(z);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const addMr = arr => {
//   return arr.map(function (item) {
//     return "Mr. " + item;
//   });
// };

// console.log(addMr(names));

const data = [
  {
    title: "green labrogini",
    seller: "cats, LLC",
    price: 20,
    isOnSale: false,
  },
  {
    title: "yellow labrogini",
    seller: "johnny, LLC",
    price: 13,
    isOnSale: false,
  },
  {
    title: "blue labrogini",
    seller: "mommyCars, LLC",
    price: 20,
    isOnSale: true,
  },
];

// Filter- create a new array in memory, it runs the callback function on each iteration and will return the item if the condition is true.

function myOtherFilter(arr) {
  return arr.filter(function (item) {
    return item.isOnSale === true;
  });
}

const d = item => item.isOnSale === true;

const myFilter = arr => arr.filter(d);

console.log(myFilter(data));

const men = ["justin", "mendel", "yehuda", "james", "bob"];

console.log(men.find(item => item === "johnny"));
