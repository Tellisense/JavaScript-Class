// var - the old way to represent variables (global scope)

// const - this is what we use to represent variables (Block scope)
// { this is called a block }

// let - can be reassigned

//Primitive Values  (every time you declare, different place in memory)
// string
// number
// boolean
// undefined
// null

// reference Types:  (if reassign, same location in memory hence reference type)
// Object
// Array

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
// JavaScript uses:  PascalCase    used for constructor Functions, Classes, Components

// let
// let name;
// name = "john Doe";
// name = "Steven Smith";
// console.log(name);

// const

const name = "John";
console.log(name);
// CAN NOT be reassigned
// it CAN NOT be changed to another PRIMITIVE value (string, number, null, undefined), it can however be updated with Reference type values, ie. Objects and Arrays.

// name = "Sara"  ****will get reassignment error*******

const person = {
  name: "John",
  age: null,
};

person.name = "Mendel";
person.age = 20;

const numbers = [1, 2, 3, 4, 5];

numbers.push(6);

console.log(numbers);
