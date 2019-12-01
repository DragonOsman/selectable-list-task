"use strict";

const ul = document.getElementById("ul");
let previouslyClicked = null;
ul.addEventListener("click", event => {
  if (event.target.tagName !== "LI") {
    return;
  }

  if (previouslyClicked) {
    previouslyClicked.classList.remove("selected");
  }

  previouslyClicked = event.target;
  previouslyClicked.classList.add("selected");
});
