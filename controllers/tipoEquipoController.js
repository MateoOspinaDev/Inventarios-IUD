const TipoEquipo = require('../models/tipoEquipo');
const {request, response} = require('express');//Para ser usado en los req y res de los metodos

const createTipoEquipo = async (req=request, res=response) =>{
    const nombre = (req.body.nombre) 
    ? req.body.nombre.toUpperCase()
    : '';
    const tipoEquipoBD = await TipoEquipo.findOne({nombre});

    if (tipoEquipoBD){
        return res.status(400).json({
            msg: `El tipo de equipo ${nombre} ya existe`
        });
    }
    const datos = {
        nombre
    }
    const tipoEquipo = new TipoEquipo(datos);
    await tipoEquipo.save();
    res.status(201).json(req.body);
}

const getTipoEquipo = async (req=request, res=response) =>{
    try{
        console.log(req.query)
        const estado = req.query.estado//obtenemos el query de la peticion
        const query = {estado: estado} //Condicionamos la busqueda
        //Find tambien puede ir vacio, y traera todos los registros
        const tipoequiposDB = await TipoEquipo.find(query)//En find podemos pasarle un objeto con las condiciones de busqueda
        return res.json(tipoequiposDB)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }

}

const getTipoEquipoByID = async (req, res) =>{
    try{
        const estado = req.query.estado
        const id = req.params.id
        const query = {estado: estado, _id: id}
        const tipoequipoDB = await TipoEquipo.findOne(query)
        return res.json(tipoequipoDB)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

const updateTipoEquipoByID = async (req, res) =>{
    try{
        const id = req.params.id
        const data = req.body;
        data.FechaActualizacion = new Date();
        const tipoEquipo = await TipoEquipo.findByIdAndUpdate(id, data, {new: true})
        console.log(tipoEquipo)
        return res.json(tipoEquipo)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

const deleteTipoEquipoByID = async (req, res) =>{
    try{
        const id = req.params.id
        const tipoEquipo = await TipoEquipo.findByIdAndDelete(id)
        if(!tipoEquipo){
            return res.status(404).json({msg: 'No existe el tipo de equipo'})
        }
        return res.status(204).json({msg: 'Tipo de equipo eliminado'})
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { 
    createTipoEquipo, 
    getTipoEquipo, 
    getTipoEquipoByID, 
    updateTipoEquipoByID, 
    deleteTipoEquipoByID 
}