const Marca = require('../models/marca');
const {request, response} = require('express');//Para ser usado en los req y res de los metodos

const createMarca = async (req=request, res=response) =>{
    const nombre = (req.body.nombre) 
    ? req.body.nombre.toUpperCase()
    : '';
    const marcaBD = await Marca.findOne({nombre});

    if (marcaBD){
        return res.status(400).json({
            msg: `La marca con nombre: ${nombre} ya existe`
        });
    }
    const datos = {
        nombre
    }
    const marca = new Marca(datos);
    await marca.save();
    res.status(201).json(req.body);
}

const getMarca = (req, res) =>{

}

const getMarcaByID = (req, res) =>{

}

const updateMarcaByID = (req, res) =>{

}

const deleteMarcaByID = (req, res) =>{

}

module.exports = { 
    createMarca, 
    getMarca, 
    getMarcaByID, 
    updateMarcaByID, 
    deleteMarcaByID 
}