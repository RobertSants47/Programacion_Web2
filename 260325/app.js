const frutas = [];

const fruta = prompt("Qué fruta deseas comprar?: ");

frutas.push(fruta);

while(confirm("¿Desea agregar otra fruta?")){
    const fruta = prompt("¿Qué fruta quires agregar?");
    frutas.push(fruta);
}

console.log("Usted compro: ");
for(let fruta of frutas){
    console.log(fruta);
}