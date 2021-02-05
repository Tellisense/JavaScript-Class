const num1 = 100;
const num2 = 80;

let val;
//simple Math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// modulus operator
// first number  divided by second number, return remainder

20 % 5; //  0  if zero then the number is even
11 % 2; //  1

// checks to see if a number is even
function isEven(n) {
  return n % 2 === 0;
}

//Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.1);
val = Math.floor(2.9);
val = Math.sqrt(64);
val = Math.abs(-210);
val = Math.pow(8, 3);
val = Math.min(2, 44, 55, 564, 43, 10, 03, 2);
val = Math.max(2, 44, 55, 564, 43, 10, 03, 2);
val = Math.random();
val = Math.floor(Math.random() * 99 + 1);

console.log(val);

i++; // i = i + 1

a += 100; // a = a + 100

a -= 100; // a = a - 100
