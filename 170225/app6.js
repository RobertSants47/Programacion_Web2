/*
let resultado1 = false && false;
let resultado2 = false && true;
let resultado = true && false;
let resultado3 = true && true;
console.log("AND");
console.log("0"+"|0"+"|"+"->"+resultado1);
console.log("0"+"|1"+"|"+"->"+resultado2);
console.log("1"+"|0"+"|"+"->"+resultado);
console.log("1"+"|1"+"|"+"->"+resultado3);
*/

let resultado1 = false != false;
let resultado2 = false || true;
let resultado = true || false;
let resultado3 = true || true;
console.log("NOT");
console.log("0"+"|0"+"|"+"->"+resultado1);
console.log("0"+"|1"+"|"+"->"+resultado2);
console.log("1"+"|0"+"|"+"->"+resultado);
console.log("1"+"|1"+"|"+"->"+resultado3);