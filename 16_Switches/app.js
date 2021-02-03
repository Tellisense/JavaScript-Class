const student = "john";

switch (student) {
  case "Motti":
    console.log("student is Motti");
    break;
  case "David":
    console.log("student is David");
    break;
  case "Mendel":
    console.log("student is Mendel");
    break;
  default:
    console.log("student is not available");
}

let Day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

console.log(`Today is ${day}`);
