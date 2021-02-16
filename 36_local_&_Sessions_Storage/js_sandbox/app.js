import jsonFile from "../data";
// set local storage
// localStorage.setItem("firstName", "Mendel");
// localStorage.setItem("lastName", "Gottlieb");

// let variable = "Weight";
// //set Session Storage
// sessionStorage.setItem(`${variable}`, "36");

// remove from storage
// localStorage.removeItem("firstName");
// sessionStorage.removeItem("Weight");

//get From Storage
const firstName = localStorage.getItem("lastName");

console.log(firstName);

// clear local Storage
localStorage.clear();

console.log(jsonFile);
