// EVENT listeners
//1. select an element
//2. attach even listener
"use strict";

const button = document.querySelector("#task");
const btn = document.querySelector(".deep-orange");
btn.classList.remove("deep-orange");
btn.style.backgroundColor = "salmon";

// document.querySelector(".clear-tasks").addEventListener("click", function (e) {
//   console.log(e.target);
// });

button.addEventListener("click", handleClick);

function handleClick(e) {
  // console.log(`you clicked me`);
  let val;
  val = e;

  //event target element
  val = e.target;
  val = e.target.id;
  val = e.target.id = "test";
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  val = e.type;

  //time stamp
  val = e.timeStamp;

  //coords event relative to the window
  val = e.clientX;
  val = e.clientY;

  // coordinates relative to the element
  val = e.offsetX;
  val = e.offsetY;
  val = e.target.name; //most important one React
  val = e.target.value; // most important one for React

  console.log(val);
}
