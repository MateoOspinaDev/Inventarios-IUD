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
    EstadoEquipo.find(function(err, articles) {
        if (err) return console.error(err);
        console.log(articles);
      });
}

const getEstadoEquipoByID = (req, res) =>{

}

const updateEstadoEquipoByID = (req, res) =>{

}

const deleteEstadoEquipoByID = (req, res) =>{

}

module.exports = { 
    createEstadoEquipo, 
    getEstadoEquipo, 
    getEstadoEquipoByID, 
    updateEstadoEquipoByID, 
    deleteEstadoEquipoByID 
}