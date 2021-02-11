// Replacing & deleting Element in the DOM

// create the new element
const newHeading = document.createElement("h1");

newHeading.id = "task-title";

newHeading.textContent = "Justin's To DO List";

const oldHeading = document.querySelector("#task-title");

const parent = document.querySelector(".card-action");

// replace
parent.replaceChild(newHeading, oldHeading);

// console.log(newHeading);
// console.log(oldHeading);
// console.log(parent);

//remove list Item
const ul = document.querySelector("ul");
const lis = document.querySelectorAll("li");

ul.removeChild(lis[2]);

// remove attributes
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;

// classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add("test-class");
link.classList.remove("test-class");
link.title = "my-title";

//attributes
val = link.getAttribute("href");
val = link.setAttribute("href", "https://disney.com");
val = link.hasAttribute("title"); //false
link.removeAttribute("title");
val = link;

console.log(val);
