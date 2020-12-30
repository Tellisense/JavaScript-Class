// function declaration
// inputs are called arguments
function greet(firstName = "justin", lastName = "instructor") {
  // return `Hi my name is ${firstName} ${lastName}`;
  return typeof firstName;
}

console.log(greet("justin", "test"));

// function expression
const double = function (x = 6) {
  return x * 2;
};

// console.log(double(10));

// Arrow functions
const addTen = (x, y) => {
  return x + y;
};

console.log(addTen(10, 10));

// Immediately Invoked Function Expression   IIFE
(function () {
  console.log("IIFE just ran!!");
})();

// passsing arguments to a IIFE
(function (name) {
  console.log(`Hi my name is ${name}`);
})("justin");

// property methods
const todo = {
  add: () => {
    console.log(`add something.. `);
  },
  edit: id => {
    console.log(`edit something with ${id} `);
  },
  delete: () => {
    console.log(`delete something.. `);
  },
};

todo.add();
todo.edit("myID");
todo.delete();

// if a single return statement no need for the word "return" and block brackets
const z = arr => arr.length;

const jane = {
  multiply: num => num * 100,
};
