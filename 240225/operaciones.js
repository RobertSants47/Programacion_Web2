function suma(numero1,numero2){
    return parseInt(numero1) + parseInt(numero2);
}

function resta(numero1,numero2){
    return parseInt(numero1) - parseInt(numero2);
}

function multiplicacion(numero1,numero2){
    return parseInt(numero1) * parseInt(numero2);
}

function division(numero1,numero2){
    return parseInt(numero1) / parseInt(numero2);
}

let opcion = parseInt(prompt(`
    Operacion: 
    1. Ingresa 1 para hacer una suma`));
switch (opcion){
    case 1:
        console.log(`La suma es: ${suma(numero1,numero2)}`);
    break;
    case 2:
        console.log(`La resta es: ${suma(numero1,numero2)}`);        
    
    }
/*
let n1 = prompt("Ingresa un número1: ");
let n2 = prompt("Ingresa un número2: ");

let resultado = division(n1,n2);
console.log("El resultado es: " + resultado);
*/