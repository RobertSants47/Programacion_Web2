/*
// Funcion declarativa
function numeroAleatorio(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

// llamada a la funcion 
console.log(numeroAleatorio(1,1));

//Funcion expresada
const miNumero = function (min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
console.log(miNumero(10,20));

function dato (a){
    return a + 100;
}

var datos = function (a){
    return a + 100;
}

var datos = (a)=>{
    return a + 100;
}

//var datos = (a)=> return a + 100;

var datos = a => a + 100;


let numeroAleatorioFlecha = (min,max) => Math.floor(Math.random()*(max-min)+min);
*/

/*
const array1 = ['a','b','c','d'];

array1.forEach(element => console.log(element));
*/

/*
arr.forEach (function callback (currentValue, index, array)){
    //iterador
}
*/

let frutas = ["manzana", "sandia", "pera", "narnja"];

//frutas.forEach(fruta => console.log(fruta));

frutas.forEach( (fruta, index, array)=>{
    //console.log(index); // indice del array (frutas)
    //console.log(fruta); // elementos que tiene el array
    console.log(array);  // Todo lo que tiene el array
});