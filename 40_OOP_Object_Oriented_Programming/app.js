// Object Oriented Programming

// ES6 Classes
// class Person {
//   constructor(name, age, sex) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
//   }
//   walk(name) {
//     console.log(`${name} is walking`);
//   }
// }

// class Teacher extends Person {
//   constructor(name, age, sex, degree) {
//     super(name, age, sex);
//     this.degree = degree;
//   }
//   teach() {
//     console.log(`teach`);
//   }
// }

// const mendel = new Person("Mendel", 30, "male");
// const justin = new Teacher("justin", 32, "male", "bs");
// console.log(justin);

// Constructor Functions
// function Person(name, age, sex) {
//   this.name = name;
//   this.age = age;
//   this.sex = sex;
// }

// Person.prototype.walk = function () {
//   console.log(`walk`);
// };
// // Array.prototype.forEach()

// const mendel = new Person("mendel", 18, "a lot");

// console.log(mendel);

// Factory Functions
// const Person = (name, age, sex) => {
//   return {
//     name,
//     age,
//     sex,
//     walk: function () {
//       console.log(`walk`);
//     },
//   };
// };

// const mendel = Person("mendel", 20, "Male");

// console.log(mendel);

// // Object.create()
const person = {
  // name: this.name,
  // age: this.age,
  // color: this.color,
  greeting: function () {
    return `Hello my name is ${this.name}, my age is ${this.age} my sex is ${this.sex}`;
  },
  walk: function () {
    console.log(`walk`);
  },
};

const mendel = Object.create(person);
mendel.name = "Mendel";
mendel.age = 30;
mendel.sex = "male";
mendel.color = "Red";

console.log(mendel);
