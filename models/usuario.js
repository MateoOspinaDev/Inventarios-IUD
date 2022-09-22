const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    email:{
        type: String,
        required: [true, 'El email es obligatorio']
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

module.exports = model('Usuario', UsuarioSchema);
