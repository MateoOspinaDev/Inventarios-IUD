const app = require('./app')
const { mongoConnection } = require('./databases/configuration')
const dotenv = require('dotenv')
dotenv.config()

app.set('port', process.env.PORT || 3000); //configuración del puerto, si no existe un puerto 
//definido en el sistema operativo, se usa el puerto 3000

const connection = mongoConnection();

//inicializa el servidor en el puerto 3000
app.listen(app.get('port'),()=>{
    console.log(`Escuchando en el puerto ${app.get('port')}`)
})