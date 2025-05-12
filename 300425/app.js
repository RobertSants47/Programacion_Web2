//Importar express
const express= require('express');

//creacion de una instancia
const app = express();

//definir el puerto
const port = 3010;

//Configuracion de ruta get para la raiz ('/')
app.get('/',(req,res)=>{
    res.send(`Hola desde el puerto : ${port}`);
});

app.listen(port, () => {
    console.log(`Funcionando desde http://127.0.0.1:${port}`);
    }
);