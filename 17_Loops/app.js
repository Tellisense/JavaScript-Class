// list of LOOPS in JS     used for iteration

// 1. FOR LOOP (general purpose loop)
// 2. WHILE LOOP (if you don't know the ending)
// 3. Do WHILE LOOP (runs at least once even if the conditions are not met)
// 4. FOR IN LOOP (iterating through OBJECTS)
// 5. FOREACH LOOP (Used for iterating through Arrays)
// 6. MAP LOOP (Used to iterate through Arrays) creates a new Array of the same size in memory, iterates through each item of the array and pushes the result to the new array.
// 7. FOR OF LOOP (used arrays and array like objects) NOT USED VERY MUCH

// const numbers = [1, 2, 3, 4, 5];

// FOR LOOP
// for (let i = 0; i <= 100; i++) {
//   if (i === 4) {
//     console.log("4 is my fav number");
//     continue;
//   }

//   console.log(`The index is ${i}`);
//   if (i === 12) {
//     break;
//   }
// }

//WHILE LOOP
// let i = 0;
// while (i <= 10) {
//   console.log(`number is ${i}`);
//   i++;
// }

// DO WHILE LOOP (if you need a loop to run at least once)
// let i = 11;
// do {
//   console.log(`number ${i}`);
//   i++;
// } while (i < 10);

// FOR IN LOOP
// const user = {
//   firstName: "Justin",
//   city: "LA",
//   age: 35,
// };

// for (let x in user) {
//   console.log(`key: ${x}`);
//   console.log(`value: ${user[x]}`);
// }

//ForEach (used to itterate through Array )
const student = ["Motti", "Yehuda", "David"];

// const addMr = arr => {
//   let result = [];
//   arr.forEach(function (item) {
//     return result.push("mr. " + item);
//   });
//   return result;
// };

// console.log(addMr(student));

// MAP
// const capitalize = arr => {
//   return arr.map((item, i) => {
//     return item.toUpperCase();
//   });
// };

// console.log(capitalize(student));

// FOR OF loop used
// for (const item of student) {
//   console.log(item);
// }

const user = {
  firstName: "Justin",
  city: "LA",
  age: 35,
  state: "CA",
  street: "main St.",
};

// write a function that will count the amount of key value pairs in an Object

const countObject = obj => {
  let counter = 0;
  for (let item in obj) {
    counter++;
  }
  return counter;
};

console.log(countObject(user));
