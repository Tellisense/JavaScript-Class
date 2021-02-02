// if (something) {
//   // do something
// } else {
//   // do something else
// }

// this is an assignment
const id = 100;

//EQUALS to:  comparison operator
// ==  double equals   will not check the type (accepts the JS type coercion)  ONLY use for  null and undefined checks in one swoop
// === triple equals checks the value and the type

// if (id === 100) {
//   console.log(`this is true`);
// } else {
//   console.log(`this is NOT true`);
// }

// // NOT equals
// if (id === 200) {
//   console.log(`this is true`);
// } else {
//   console.log(`this is NOT true`);
// }

// //  Negate operand
// if (!id === 100) {
//   console.log(`this is true`);
// } else {
//   console.log(`this is NOT true`);
// }

// NOT equals   != (value Check, similar to ==),  !== (checks type and value check, similar to ===)
// if (id !== 200) {
//   console.log(`this is true`);
// } else {
//   console.log(`this is NOT true`);
// }

// test if something is of a type
// if (typeof id !== "undefined") {
//   console.log(`the ID is ${id}`);
// } else {
//   console.log(`no ID`);
// }

// greater than  >
// greater than or equal to  >=
// less than  <
// less than or equal to  <=
//  && AND operator     (true && true) === true  everything has to be true
// (true && false && true) === false;

// OR operator  ||  (true || false || false ) === true

// mix of OR and AND (true || false && true) === true

const name = "Justin";
const age = 20;

// AND &&
// if (age > 0 && age > 21) {
//   console.log(`${name} can drink alcohol`);
// } else {
//   console.log(`${name} can NOT drink alcohol`);
// }

// if (age > 0 && age < 12) {
//   console.log(`${name} is a child`);
// } else if (age >= 13 && age <= 19) {
//   console.log(`${name} is a teenager`);
// } else {
//   console.log(`${name} is an adult`);
// }

// OR ||
// if (age < 16 || age > 65) {
//   console.log(`${name} can not run in race`);
// } else {
//   console.log(`${name} is registered for the race`);
// }

// TERNARY OPERATOR (3 parts, condition, option A, option B)
// something ? option-A : option-B
// something ? option-A : check something else ? option-B : option-C
// something ? option-A : check something else ? option-B : check another thing ? option-C : option-D

// falsey values: 0 , false, undefined, null, "" (empty string), NaN
// truthy values: 1 or any number other than 0, true, "string value",

// Nullish Coalescing
console.log(false ?? "some Truthy value");
// false
console.log(undefined ?? "some Truthy value");
// some Truthy value
console.log(null ?? "some Truthy value");
// some Truthy value
console.log(NaN ?? "some Truthy value");
// some Truthy value
