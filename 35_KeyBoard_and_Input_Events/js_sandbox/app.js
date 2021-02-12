const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

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
card.addEventListener("mousemove", runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE IS:  ${e.type}`);
}
