const {Schema, model} = require('mongoose');

//de esta forma creamos una coleccion (tabla en MySQL), ahí ingresamos los atributos.
const InventarioSchema = Schema({
        serial:{
            type: String,
            required: [true, 'El nombre es obligatorio'],
            unique: true
        },
        modelo:{
            type: Boolean,
            required: [true, 'El nombre es obligatorio'],
            unique: true
        },
        descripcion:{
            type: String
        },
        foto:{
            type: String
        },
        color:{
            type: String
        },
        fechaCompra:{
            type: Date,
            default: new Date()
        },
        precio:{
            type: Number
        },
        usuario:{
            type: Schema.Types.ObjectId,
            ref: 'Usuario',
            required: true
        },
        marca:{ 
            type: Schema.Types.ObjectId,
            ref: 'Marca',
            required: true
        },
        estado:{ 
            type: Schema.Types.ObjectId,
            ref: 'EstadoEquipo',
            required: true
        },
        tipoEquipo:{ 
            type: Schema.Types.ObjectId,
            ref: 'TipoEquipo',
            required: true
        }
});

//Exportamos el modelo para poder usarlo en otros archivos
module.exports = model('Inventario', InventarioSchema);