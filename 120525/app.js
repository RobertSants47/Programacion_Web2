const express = require ('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

// manejo de peticiones de http por medio de requiest
app.use(bodyParser.urlencoded({extended:false}));

// configuracion de plantilla
app.set('view engine', 'ejs');


// conexion a la BD
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'node_crud',
    port: 3306
});



// validacion 
db.connect(err => {
    if(err){
        console.error('Error en la conexion de la DB',err);
    }else{
        console.log('Conexión realizada con exito');
    }
});

// inicio de servidor

const port = 3006;
app.listen(port, ()=> {
    console.log(`http://127.0.0.1:${port}`);
});

// mostrar lista de usuarios 
app.get('/', (req,res)=>{
    // consulta a la BD
    const consultaDB = 'SELECT * FROM users';


    // trabajamos con la conexión

    db.query(consultaDB,(err,result)=>{
        if(err){
            // no se encontrór el usuario o se tiene un error
            console.error('Error al recuperar usuario',err);
            // mostrar la información al usuario 
            res.send('Error no se recuperan los datos de la DB');
        }else{
            res.render('index',{users: result});
        }
    });
});


// modulo para agregar el usuario

app.post('/add',(req,res)=>{
    const {name, email} = req.body;
    /*
        Nombre: roberto
        Correo: roberto@aragon.unam.mx
        ->
        name: roberto
        email: roberto@aragob.unam.mx
    */
    const insertarRegistro ='INSERT INTO users (name, email) VALUES (?,?)';
    db.query(insertarRegistro, [name,email],(err)=>{
        if(err){
            console.error('Error al agregar usuario: ',err);
            res.send('Error');
        }else{
            res.redirect('/');
        }
    });
});
app.post('/edit/:id', (req, res) =>{

});

//editar usuario

app.get('/edit/:id',(req,res) => {
    const {id} = req.params;
    const buscarUsuarioID = 'SELECT * FROM users WHERE id = ?';
    
    db.query(buscarUsuarioID, [id],(err,results)=>{
        if(err){
            console.error('Error en la DB',err);
        }else{
            res.render('edit', {user: results[0]});
        }
    });

});


// update

app.post('/update/:id', (req,res)=>{
    const {id} =req.params;
    const {name,email} = req.body;

    const query = "UPDATE users SET name = ?, email = ? WHERE id = ?";
    db.query(query,[name,email,id],(err)=>{
        if(err){
            console.error('Error',err);
        }else{
            res.redirect('/');
        }
    });
});

//eliminar usuario 
app.get('/delete/:id', (req, res)=>{
    const {id} = req.params;
    const eliminarUsuarioId = 'DELETE FROM users WHERE id = ?';
    db.query(eliminarUsuarioId), [id], (err)=>{
        if(err){
            console.error('Error al eliminar en la DB', err);
            res.send("Error en la DB")
        }else{
            res.redirect('/');
        }};
});