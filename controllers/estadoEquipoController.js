const EstadoEquipo = require('../models/estadoEquipo');
const {request, response} = require('express');//Para ser usado en los req y res de los metodos

const createEstadoEquipo = async (req=request, res=response) =>{
    const nombre = (req.body.nombre) 
    ? req.body.nombre.toUpperCase()
    : '';
    const estadoEquipoBD = await EstadoEquipo.findOne({nombre});

    if (estadoEquipoBD){
        return res.status(400).json({
            msg: `El estado equipo con nombre: ${nombre} ya existe`
        });
    }
    const datos = {
        nombre
    }
    const estadoEquipo = new EstadoEquipo(datos);
    await estadoEquipo.save();
    res.status(201).json(req.body);
}

const getEstadoEquipo = async (req, res) =>{
try{
        console.log(req.query)
        const estado = req.query.estado//obtenemos el query de la peticion
        const query = {estado: estado} //Condicionamos la busqueda
        //Find tambien puede ir vacio, y traera todos los registros
        const estadoequiposDB = await EstadoEquipo.find(query)//En find podemos pasarle un objeto con las condiciones de busqueda
        return res.json(estadoequiposDB)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

const getEstadoEquipoByID = async (req, res) =>{
    try{
        const estado = req.query.estado
        const id = req.params.id
        const query = {estado: estado, _id: id}
        const estadoequipoDB = await EstadoEquipo.findOne(query)
        return res.json(estadoequipoDB)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

const updateEstadoEquipoByID = async (req, res) =>{
    try{
        const id = req.params.id
        const data = req.body;
        data.FechaActualizacion = new Date();
        const estadoEquipo = await EstadoEquipo.findByIdAndUpdate(id, data, {new: true})
        console.log(estadoEquipo)
        return res.json(estadoEquipo)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

const deleteEstadoEquipoByID = async (req, res) =>{
    try{
        const id = req.params.id
        const estadoEquipo = await EstadoEquipo.findByIdAndDelete(id)
        if(!estadoEquipo){
            return res.status(404).json({msg: 'No existe el tipo de equipo'})
        }
        return res.status(204).json({msg: 'Tipo de equipo eliminado'})
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { 
    createEstadoEquipo, 
    getEstadoEquipo, 
    getEstadoEquipoByID, 
    updateEstadoEquipoByID, 
    deleteEstadoEquipoByID 
}