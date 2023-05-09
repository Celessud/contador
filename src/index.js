import Toll from "./Entidades/toll.js";

const toll = new Toll();

console.log(toll.isOpen());

toll.close();
console.log(toll.isOpen());

toll.open();
console.log(toll.isOpen());
