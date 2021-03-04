//Curring
// you do this when you can only pass one argument to a function
function add(x) {
  return function (y) {
    return x + y;
  };
}
//curring
const add = x => y => x + y;

add(10)(20);
