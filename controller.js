import Contador from "./src/Entidades/contador.js";

const contador = new Contador();

const valor = document.getElementById("valor");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");

const incrementCustom = document.getElementById("incrementCustom");
const decrementCustom = document.getElementById("decrementCustom");

increment.addEventListener("click", () => {
  contador.incrementar();
  valor.innerHTML = contador.valor();
});

decrement.addEventListener("click", () => {
  contador.decrementar();
  valor.innerHTML = contador.valor();
});

reset.addEventListener("click", () => {
  contador.reset();
  valor.innerHTML = contador.valor();
});

incrementCustom.addEventListener("click", () => {
  contador.incrementarCon(10);
  valor.innerHTML = contador.valor();
});

decrementCustom.addEventListener("click", () => {
  contador.decrementarCon(2);
  valor.innerHTML = contador.valor();
});
