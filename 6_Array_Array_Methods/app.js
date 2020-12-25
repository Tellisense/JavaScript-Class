const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["apple", "bananas", "oranges", "pears"];
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

// console.log(`The array has: `, numbers.length);

let val;
val = mixed.length;
val = fruit[2];
val = numbers[6];

numbers[3] = 500;

console.log(numbers);
console.log(val);
