// // given two arrays of names, combine the first names with last names.

// const firstNames = ["justin", "mendel", "sholom", "yossi"];
// const lastNames = ["rahimi", "gotlib", "perman", "kosofsky"];

// const combineNames = (arr1, arr2) => {
//   //code goes here
// };
// combineNames(firstName, lastName); //["Justin Rahimi", "Mendel Gotlib", "Sholom Perman", "Yossi Kosofsky"]

let z = [11, 22, 5, 6, 8, 9, 3, 4, 5, 3, 55, 76, 87, 12, 15]; // [22,6,8,4,76,12]

// takes in an array and return an Array with all of the even numbers
[22, 6, 8, 76, 12];

let evens = arr => {
  return arr.filter(item => {
    return item % 2 === 0; // has to be a boolean
  });
};

let allEven = arr => {
  return arr.map(item => {
    if (item % 2 === 0) {
      return item;
    } else {
      return item + 1;
    }
  });
};

console.log(allEven(z));
console.log(`z: `, z);
