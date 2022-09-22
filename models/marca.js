const {Schema, model} = require('mongoose');

const marcaSchema = Schema({
    nombre:{ 
        type: String, 
        required: [true, 'El nombre es obligatorio'] 
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
    fechaActualizacion:{ 
        type: Date, 
        default: new Date()
 }
});

module.exports = model('Marca', marcaSchema);