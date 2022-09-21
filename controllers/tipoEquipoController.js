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

const getTipoEquipo = (req, res) =>{

}

const getTipoEquipoByID = (req, res) =>{

}

const updateTipoEquipoByID = (req, res) =>{

}

const deleteTipoEquipoByID = (req, res) =>{

}

module.exports = { 
    createTipoEquipo, 
    getTipoEquipo, 
    getTipoEquipoByID, 
    updateTipoEquipoByID, 
    deleteTipoEquipoByID 
}