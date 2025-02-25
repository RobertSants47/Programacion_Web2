let numeroMaquina = Math.floor(Math.random()*(10-1)+1);
console.log(numeroMaquina);
let numeroUser = parseInt(prompt("Indica un número entre 1 y 10: "));
/*
//Propuesta
let vidas = 5;
let numero = 8;

while(vidas >= 5){
    if (numeroMaquina === numero){
        console.log("¡Felicidades adivinaste el número!");
        console.log("El número es: " +numero);
        break
    }else{
       vidas++; 
    }

}
*/ 
let vidas = 5;
while(numeroMaquina !== numeroUser && vidas>1){
    vidas --;
    numeroUser = parseInt(prompt("El numero no es correcto. \n Te quedan: "+vidas));
}
if(numeroMaquina === numeroUser){
    console.log("Ganaste");
}else{
    console.log("El número era: "+numeroMaquina)
}