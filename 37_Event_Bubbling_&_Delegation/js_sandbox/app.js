//EVENT BUBBLING
// document.querySelector(".card-title").addEventListener("click", function () {
//   console.log("card Title");
// });

// document.querySelector(".card-content").addEventListener("click", function () {
//   console.log("card-content");
// });
// document.querySelector(".card").addEventListener("click", function () {
//   console.log("card");
// });
// document.querySelector(".col").addEventListener("click", function () {
//   console.log("col");
// });

//EVENT DELEGATION

// const delItem = document.querySelector(".delete-item");

// delItem.addEventListener("click", deleteItem);

document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  // if (e.target.parentElement.className === "delete-item secondary-content")
  //   console.log("delete Item");
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete-item");
    e.target.parentElement.parentElement.remove();
  }

  // console.log("clicked");
}

// console.log(delItem);
