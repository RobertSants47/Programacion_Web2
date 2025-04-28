// importar módulo
const serverHTTP = require('http');

//definir puerto 
const port = 3059;

// crear el servidor
const server = serverHTTP.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text-plain'});
    res.end('Hola desde un server con Node con el módulo http de Node')
});

server.listen(port,()=>{
    console.log(`Servidor funcional por la URL: http://127.0.0.1:${port}`)
});