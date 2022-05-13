import { DOMSelectors } from "./dom.js";

const buttons = Array.from(document.querySelectorAll(".add"));
buttons.forEach((button) =>{
  button.addEventListener("click", function () {
    console.log("rhgliurg");
  });
});
