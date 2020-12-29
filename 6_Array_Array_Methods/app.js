const numbers = [55, 44, 233, 2, 1, 4, 6, 87, 65];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["oranges", "bananas", "pears", "apple"];
const str = "this is a string";
const hobbies = "skiing, swimming, fishing";
const mixed = [
  22,
  "Hello",
  false,
  true,
  undefined,
  null,
  { a: 1, b: 2 },
  [1, 2, 3],
  new Date(),
];
Object.defineProperty(console, "_commandLineAPI", {
  get: function () {
    throw "Nooo!";
  },
});
// console.log(`The array has: `, numbers.length);

let val;
val = mixed.length;
val = fruit[2];
val = numbers[6];
val = Array.isArray(numbers);
// val = Array.from([1, 2, 3]); // convert html collection or other none array types to an actual Array.

//insert into the middle Array
// numbers[2] = 100; //replaces the item in position

// val = numbers[2];

// numbers[2] = val + 100;
// val = numbers.indexOf(44);

// mutating Arrays:
//adding to the end
// numbers.push(800); // out in the end
// numbers.pop(); // take out of the end
// numbers.unshift(300); //put in the beginning
// numbers.shift(); // take out of the beginning
// numbers.splice(1, 3); //takes out a range of given indexes
// numbers.reverse();
// val = str.split("").reverse().join("");
val = hobbies.split(","); // split() takes a string and converts into an array, with specified separator.
val = numbers.concat(numbers2);
val = [...numbers, ...numbers2];

val = numbers.slice(); // this is a hack to copy an Array in a new location in memory
// val = fruit.slice(1, 4);

val = fruit.slice().sort();
// val = numbers.sort();

// val = numbers.sort(function (a, b) {
//   // sort numbers
//   return a - b;
// });

// val = numbers.sort(function (a, b) {
//   // reverse sort
//   return b - a;
// });

function over200(num) {
  return num > 200;
}

val = numbers.find(over200);

// console.log(numbers);
console.log(fruit);
console.log(val);

// Palindrome
// write a function that will take a string, and return true if the
// string is the same if it is reversed.

function palindrome(str) {
  // what goes here
  return str === reversedStr;
}

palindrome("assa"); // return true
palindrome("dong"); // return false

// answer1:
function palindrome(str) {
  return str === str.split("").reverse().join("");
}

// answer 2:
function palindrome(str) {
  var reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}



//homework question 

var x = ["apples", "bananas", "pears"];
var y = ["pizza", "hotdogs", "hamburgers"];

function combine(arr1, arr2) {
  // code goes here 
return 
}
​
// one array that is the combination of the 2 arrays
​
combine(x, y) // ["apples", "bananas", "pears", "pizza", "hotdogs", "hamburgers"]
