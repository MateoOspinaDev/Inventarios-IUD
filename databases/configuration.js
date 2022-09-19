const mongoose = require('mongoose');

const mongoConnection = async () =>{
    try{
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log('Conectado a la base de datos')
}catch(e){
    console.log(e)
    throw new Error('Error al iniciar la base de datos')
}
}

module.exports = {mongoConnection}