// importamos el modulo HTTP que voene incluido en Node.js
const ServidorNodeImportado = require('http');

//definimos un puerto de salida 
const port = 3005;

//crear un servidor 
const server = ServidorNodeImportado.createServer((req,res)=>{
    // establecer el encabezado de respuesta
    res.writeHead(200,{'Content-Type':'text/plain'});
    
    // Enviamos la respuesta
    res.end('Hola Mundo');
});

//Escuchar el puerto 

server.listen(port, ()=>{
    console.log(`Servidor ejecutandose por medio de http://localhost:${port}`);
});