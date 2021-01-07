const person = {
  sex: "M",
  firstName: "justin",
  age: 20,
  teach: function () {
    console.log(this);
  },
  isCool: true,
};

// console.log(person.firstName);
// console.log(person.age);
// console.log(person["age"]);

function callObj(obj, value) {
  console.log(obj[value]);
}

console.log(callObj(person, "age"));
