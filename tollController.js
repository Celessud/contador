import Toll from "./src/Entidades/toll.js";

const toll = new Toll();

const btnOpen = document.getElementById("openToll");
const btnClose = document.getElementById("closeToll");

const state = document.getElementById("stateToll");

btnOpen.addEventListener("click", () => {
  toll.open();
  state.style.backgroundColor = "green";
  state.innerHTML = `Abiert ${toll.isOpen()}`;
});

btnClose.addEventListener("click", () => {
  toll.close();
  state.style.backgroundColor = "red";
  state.innerHTML = `Abiert ${toll.isOpen()}`;
});
