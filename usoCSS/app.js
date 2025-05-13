const express = require ('express');
const path = require ('path');
const routes = require ('./rutas/rutas.js');

const app = express ();
const port = 3047;

//middleware
app.use (express.static (path.join (__dirname,"materialize")));

//usar las rutas desde el archivo routes.js
app.use ("/",routes);

app.listen (port, () => {
    console.log(`http://127.0.0.1:${port}`);
});