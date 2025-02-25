/*
function saluda(){
    console.log("Hola mundo");
}
saluda();

function despedida(nombre){
    console.log("Adiós " + nombre);
}
despedida("Robert");

function operacion(numero){
    let a = 80;
    let b = 21;
    let calculo = (numero*a)/b;
    return calculo;
}
console.log(operacion(10));
*/

function suma(n1,n2){
    return parseInt(n1) + parseInt(n2);
}

let numero1 = prompt("Ingresa un número1: ");
let numero2 = prompt("Ingresa un número2: ");

let resultado = suma(numero1,numero2);
console.log("El total es: " + resultado);