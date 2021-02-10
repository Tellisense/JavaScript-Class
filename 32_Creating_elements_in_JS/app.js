const li = document.createElement("li");

const ul = document.querySelector(".collection");
//add class
li.className = "collection-item";

// add ID
li.id = "new-item";

//add attribute
li.setAttribute("title", "new list item for sale");

li.textContent = "new li...";

//create a new link element
const link = document.createElement("a");

//add classes
link.className = "delete-item secondary-content";
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

li.appendChild(link);

ul.appendChild(li);

firstLi = console.log(ul);

console.log(li);
