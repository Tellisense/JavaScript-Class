const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h1");
const body = document.querySelector("body");

// click
// clearBtn.addEventListener("click", runEvent);
// DoubleClick
// clearBtn.addEventListener("dblclick", runEvent);
//mouseDown
// clearBtn.addEventListener("mousedown", runEvent);
//mouseup
// clearBtn.addEventListener("mouseup", runEvent);
//mouseenter
// clearBtn.addEventListener("mouseenter", runEvent);
//mouseleave
// clearBtn.addEventListener("mouseleave", runEvent);
//mouseover
// clearBtn.addEventListener("mouseover", runEvent);
//mouseout
// clearBtn.addEventListener("mouseout", runEvent);

//mousemove
// card.addEventListener("mousemove", runEvent);

//body
body.addEventListener("mousemove", runEvent);

//Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE IS:  ${e.type}`);
  let x = e.clientX;
  let y = e.clientY;
  heading.textContent = `x: ${x}  y: ${y}`;
  body.style.backgroundColor = `rgb( ${x} , ${y}, 80)`;
}
