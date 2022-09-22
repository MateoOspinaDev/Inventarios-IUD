//Contienen expres y las peticiones
const express = require('express');

const app = express();
//To Do: Habilitar CORS

const tipoEquipoRoute = require('./routes/tipoEquipoRoute'); //Importamos las rutas de tipoEquipo
const usuarioRoute = require('./routes/usuarioRoute'); //Importamos las rutas de usuario
const marcaRoute = require('./routes/marcaRoute');
const estadoEquipoRoute = require('./routes/estadoEquipoRoute');
/**
 * Middlewares: Es una función que se ejecuta antes de que llegue a la ruta
 */
//To Do middleware urlencoded: para que el servidor entienda los datos que vienen de un formulario
app.use(express.json()); //Para poder leer los datos que vienen en formato JSON
//To Do  middleware de subida de foto
//To Do middleware de cors para que el servidor pueda ser consumido por cualquier cliente
app.use('/api/tipoEquipo', tipoEquipoRoute); //Para que todas las rutas que empiecen con /api/tipoEquipo se dirijan a tipoEquipoRoute
app.use('/api/usuario', usuarioRoute);
app.use('/api/marca', marcaRoute);
app.use('/api/estadoEquipo', estadoEquipoRoute);

app.get('/',(req,res)=>{
    return res.json({})
});

module.exports = app;