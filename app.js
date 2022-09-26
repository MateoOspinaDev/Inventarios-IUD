//Contienen expres y las peticiones
const express = require('express');

const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');

const tipoEquipoRoute = require('./routes/tipoEquipoRoute'); //Importamos las rutas de tipoEquipo
const usuarioRoute = require('./routes/usuarioRoute'); //Importamos las rutas de usuario
const marcaRoute = require('./routes/marcaRoute');
const estadoEquipoRoute = require('./routes/estadoEquipoRoute');
const inventarioRoute = require('./routes/inventarioRoute');
/**
 * Middlewares: Es una función que se ejecuta antes de que llegue a la ruta
 */
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //Para poder leer los datos que vienen en formato JSON
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}
));
app.use(cors(
    {origin: '*'} //Para que cualquier cliente pueda acceder a la API
));
app.use('/api/tipoEquipos', tipoEquipoRoute); //Para que todas las rutas que empiecen con /api/tipoEquipo se dirijan a tipoEquipoRoute
app.use('/api/usuarios', usuarioRoute);
app.use('/api/marcas', marcaRoute);
app.use('/api/estadoEquipos', estadoEquipoRoute);
app.use('/api/inventarios', inventarioRoute);


app.get('/',(req,res)=>{
    return res.json({})
});

module.exports = app;