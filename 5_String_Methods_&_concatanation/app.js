// drive();
// console.log(student);

// var student = "Mendel";

// function drive() {
//   var teacher = "Justin";
//   console.log("I'm inside the function");
// }
// console.log(teacher);

// ES5 (Old)  ES2015 or ES6 or ES6+
const name = "James";
const age = 31;
const job = "Web Developer";
const city = "LA";
let html;
const myDiv = document.getElementById("myDiv");

//concatenation ES5
// html =
//   "<ul><li>Name: " +
//   name +
//   "</li><li>Age: " +
//   age +
//   " </li><li>Job: " +
//   job +
//   " </li><li>City: " +
//   city +
//   " </li></ul>";

// template strings or template literals - ES6

html = `
<ul>
<li>name: ${name} </li>
<li>age: ${age}  </li>
<li>job: ${job} </li>
<li>city:${city}  </li>
</ul>
`;

html = `Hi the winner is : ${name}`;

// myDiv.innerHTML = html;
myDiv.innerText = html;
