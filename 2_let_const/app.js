// var - the old way to represent variables (global scope)

// const - this is what we use to represent variables (Block scope)
// { this is called a block }

// let - can be reassigned

// var name = "john Doe";

// name = "Steven james";

var myId = 1232323;
var add = "1" + "2";
var isCrazy = false;

// initialize a variable

var greeting;

greeting = "Hi Justin";

// letters, numbers, _, $;
// you can NOT start a variable name with a number

// html and CSS use: kabob-case

// JavaScript uses:  camelCase     All of JS
// JavaScript uses:  PascalCase    convention for constructor Functions, Classes, Components

// let (can be reassigned or initialized without a value, block level scope)
// let name;
// name = "john Doe";
// name = "Steven Smith";
// console.log(name);

// const
// You should always use const unless you want to initialize a variable without giving a value, or reassign the primitive value or are inside a loop.
// CAN NOT be reassigned or initialized without a value
// it CAN NOT be changed to another PRIMITIVE value (string, number, null, undefined), it can however be updated with Reference type values, ie. Objects and Arrays.

// const name = "John";
// console.log(name);

// name = "Sara"  ****will get reassignment error*******

// const person = {
//   name: "John",
//   age: null,
// };

// person.name = "Mendel";
// person.age = 20;

// const numbers = [1, 2, 3, 4, 5];

// numbers.push(6);

// console.log(numbers);

//Primitive Values  (every time you declare, different place in memory)
// string
// number
// boolean
// undefined
// null

//Symbol()
//BigInt(435234523452345)   435234523452345n

// reference Types:  (if reassign, same location in memory hence reference type)
// Object
// Array

let test;

test = "this is a string";

test = true;

test = null;

test = Symbol();

test = hugeNumber = BigInt(89374981728478);

test = undefined;

// reference types
// Object
const car = {
  manufacturer: "Honda", // property
  model: "accord",
  year: 1991,
  color: "red",
  isCool: false,
  drive: function () {
    return "Yes I can drive";
  }, //method
};

console.log(car);

// console.log(car.model);
// console.log(car.isCool);
// console.log(car.drive());

// Array
const fruit = ["apple", "pears", "lemons", "cherry", true, 3214234];

console.log(fruit[1]);

const data = [
  {
    id: 3234,
    imgURL: "https://asdfasdf.com",
    title: "trump won",
    article: "lorem kjfjkajsdfkjasdfjajsdfjasdfjsdjfk",
  },
  {
    id: 3234,
    imgURL: "https://asdfasdf.com",
    title: "trump won",
    article: "lorem kjfjkajsdfkjasdfjajsdfjasdfjsdjfk",
  },
  {
    id: 3234,
    imgURL: "https://asdfasdf.com",
    title: "trump won",
    article: "lorem kjfjkajsdfkjasdfjajsdfjasdfjsdjfk",
  },
];

// console.log(fruit[7]);
// console.log(car);

// console.log(test);
// console.log(typeof test);
