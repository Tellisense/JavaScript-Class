//strict mode

// Global Scope
var a = 1;
let b = 2;
const c = 3;

//function scope
function test() {
  var a = 4;
  let b = 5;
  const c = 6;
}

// block level scope
// if (true) {
//   var a = 4;
//   let b = 5;
//   const c = 6;
// }

for (let a = 0; a < 10; a++) {
  console.log(`loop: ${a}`);
}

test();

console.log("Global Scope: ", a, b, c);
