const Usuario = require('../models/usuario');
const {request, response} = require('express');//Para ser usado en los req y res de los metodos

const createUsuario = async (req=request, res=response) =>{
    const nombre = (req.body.nombre) 
    ? req.body.nombre.toUpperCase()
    : '';
    const usuarioBD = await Usuario.findOne({nombre});

    if (usuarioBD){
        return res.status(400).json({
            msg: `El usuario con ${nombre} ya existe`
        });
    }
    const datos = {
        nombre
    }
    const usuario = new Usuario(datos);
    await usuario.save();
    res.status(201).json(req.body);
}

const getUsuario = (req, res) =>{

}

const getUsuarioByID = (req, res) =>{

}

const updateUsuarioByID = (req, res) =>{

}

const deleteUsuarioByID = (req, res) =>{

}

module.exports = { 
    createUsuario, 
    getUsuario, 
    getUsuarioByID, 
    updateUsuarioByID, 
    deleteUsuarioByID 
}