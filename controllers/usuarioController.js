const Usuario = require('../models/usuario');
const {request, response} = require('express');//Para ser usado en los req y res de los metodos

const createUsuario = async (req=request, res=response) =>{
        try{
            const data = req.body
            const email = data.email
            console.log(data)
            const usuarioBD = await Usuario.findOne({ email })
            if(usuarioBD){
                return res.status(400).json({msg: 'Ya existe usuario'})
            }
            const usuario = new Usuario(data)
            console.log(usuario)
            await usuario.save()
            return res.status(201).json(usuario)
        }catch(e){
            console.log(e)
            return res.status(500).json({e})
        }
}

const getUsuario = async (req, res) =>{
    try{
        console.log(req.query)
        const estado = req.query.estado
        const query = {estado: estado} 
        const usuariosDB = await Usuario.find(query)
        return res.json(usuariosDB)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

const getUsuarioByID = async (req, res) =>{
    try{
        const estado = req.query.estado
        const id = req.params.id
        const query = {estado: estado, _id: id}
        const usuarioDB = await Usuario.findOne(query)
        return res.json(usuarioDB)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

const updateUsuarioByID = async (req, res) =>{
    try{
        const id = req.params.id
        const data = req.body;
        data.FechaActualizacion = new Date();
        const usuario = await Usuario.findByIdAndUpdate(id, data, {new: true})
        console.log(usuario)
        return res.json(usuario)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

const deleteUsuarioByID = async (req, res) =>{
    try{
        const id = req.params.id
        const usuario = await Usuario.findByIdAndDelete(id)
        if(!usuario){
            return res.status(404).json({msg: 'No existe el tipo de equipo'})
        }
        return res.status(204).json({msg: 'Tipo de equipo eliminado'})
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { 
    createUsuario, 
    getUsuario, 
    getUsuarioByID, 
    updateUsuarioByID, 
    deleteUsuarioByID 
}