import Contador from "./Entidades/contador.js";

const contador = new Contador();

console.log(contador.toString());

console.log(contador.valor());

contador.incrementar();
console.log(contador.valor());

contador.incrementarCon(11);
console.log(contador.valor());
