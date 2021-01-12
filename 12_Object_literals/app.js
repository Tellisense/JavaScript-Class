const person = {
  sex: "M",
  firstName: "justin",
  age: 20,
  teach: function () {
    // always use  traditional functions inside of objects, no arrow functions. They don't bind  keyword "this" to the parent object but the global object which we don't want.
    console.log(this);
  },
  isCool: true,
  email: "steve@aol.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "FL",
  },
  getBirthYear: function () {
    return 2021 - this.age;
  },
};

// console.log(person.firstName);
// console.log(person.age);
// console.log(person["age"]);

function callObj(obj, value) {
  console.log(obj[value]);
}

// console.log(callObj(person, "age"));
// console.log(callObj(person, "address"));

// objectName.oneofTheKeys

const car = {
  "model number": "matt Black",
};

// console.log(car["model number"]);
// console.log(person.getBirthYear());

const people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 23 },
  { name: "Nancy", age: 40 },
];

for (let i = 0; i < people.length; i++) {
  // console.log(people[i].name);
}

const getNames = arr => {
  const result = [];
  arr.forEach(function (item) {
    result.push(item.name);
  });
  return result;
};

// console.log(getNames(people));

const getNamesMap = arr => arr.map(item => item.name);

// console.log(getNamesMap(people));

const countries = {
  BR: "Brazil",
  DE: "Germany",
  RO: "Romania",
  US: "USA",
  address: {
    street: {
      plateNo: 123,
      streetName: {
        name: "main St",
        typeOf: "Dr.",
      },
    },
    city: "LA",
    state: "CA",
  },
};

//optional chaining
let val;

// val = countries.address.street?.streetCharacter?.roadColor;
val = countries.address.street.streetName.typeOf; //Dr.

// console.log(val);

// console.log(Object.keys(countries)); //  ["BR", "DE", "RO", "US"]
// console.log(Object.values(countries)); //  ["Brazil", "Germany", "Romania", "USA"]
// console.log(Object.entries(countries)); //  [["BR" ,Brazil"], ["DE","Germany"],["RO", "Romania"] ,["US", "USA"]]

// Data structure hash map or a dictionary

const numbers = ["a", "b", "z", "h", "u", "y", "z", "a", "i", "a", "y", "a"];
// ! negates basically turns to the opposite value : so true will become false

const paragraph =
  "South Vietnam in 1966 Badcoe displayed conspicuous gallantry and leadership on three occasions between February and April 1967 In the final battle he was killed by a burst of machine-gun fire. He was posthumously awarded the Victoria Cross for his actions as well as the United States Silver Star and several South Vietnamese medals Badcoe's medal set is now displayed in the Hall of Valour at the Australian War Memorial in Canberra. Buildings in South Vietnam and Australia have been named after";

// find the highest repeating  word in a paragraph
const findHighestWord = str => {
  const obj = {};
  const arr = str.split(" ");
  const result = {
    number: 0,
    word: "",
  };
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
      if (obj[arr[i]] > result.number) {
        result.number = obj[arr[i]];
        result.word = arr[i];
        console.log("result: ", result);
      }
    } else {
      obj[arr[i]] = 1;
    }
  }
  return result.word;
};

console.log(findHighestWord(paragraph));

// return the first repeating string
const findFirstRepeat = arr => {
  const hashMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (!hashMap[arr[i]]) {
      hashMap[arr[i]] = 1;
    } else {
      return arr[i];
    }
  }
};

// console.log(findFirstRepeat(numbers));

// find the highest repeating character in an array
const findHighestRepeat = arr => {
  //code goes here
};
