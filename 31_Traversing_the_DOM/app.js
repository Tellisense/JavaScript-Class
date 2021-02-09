let val;

const list = document.querySelector(".collection");
const listItem = document.querySelector(".collection-item:first-child");

val = list.childNodes; // not recommended because it adds returns as text

val = list.children;
val = list.children[0];
val = list.children[2].textContent = "My name is Justin";
val = list.children[2].id = "third-li";
val = list.children[3].children[0].children[0];

// val = list.firstChild; // this is related to ChildNode, this one uses text for returns
val = list.firstElementChild;
val = list.lastElementChild;
val = list.childElementCount; //5

// val = listItem.parentNode;
val = listItem.parentElement; // select the parent from child
val = listItem.parentElement.parentElement; // select the grandParent from a child

// val = listItem.nextSibling; // this is related to ChildNode, this one uses text for returns
val = listItem.nextElementSibling; // select next sibling
val = listItem.previousElementSibling; // select previous sibling

console.log(val);
