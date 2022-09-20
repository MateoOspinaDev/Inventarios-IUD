const {Schema, model} = require('mongoose');

//de esta forma creamos una coleccion (tabla en MySQL), ahí ingresamos los atributos.
const TipoEquipoSchema = Schema({
        nombre:{
            type: String,
            required: [true, 'El nombre es obligatorio'],
        },
        estado:{
            type: Boolean,
            default: true,
            required: true
        },
        fechaCreacion:{
            type: Date,
            default: new Date()
        },
        FechaActualizacion:{
            type: Date,
            default: new Date()
        }
});

//Exportamos el modelo para poder usarlo en otros archivos
module.exports = model('TipoEquipo', TipoEquipoSchema);