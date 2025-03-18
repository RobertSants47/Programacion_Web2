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
    Elige la operación que quieres realizar: 
    1. Suma
    2. Resta
    3. Multiplicación
    4. Division`));

let numero1 = prompt("Ingresa el número1: ");
let numero2 = prompt("Ingresa el número2: ");

switch (opcion){
    case 1:
        console.log(`La suma es: ${suma(numero1,numero2)}`);
    break;
    case 2:
        console.log(`La resta es: ${resta(numero1,numero2)}`);
    break;
    case 3:
        console.log(`La multiplicación es: ${multiplicacion(numero1,numero2)}`);
    break;
    case 4:
        console.log(`La división es: ${division(numero1,numero2)}`);
    break;
    default:
        console.log("¡ERROR! No has seleccionado ningua opción");        
    
    }

/*
let n1 = prompt("Ingresa un número1: ");
let n2 = prompt("Ingresa un número2: ");

let resultado = division(n1,n2);
console.log("El resultado es: " + resultado);
*/