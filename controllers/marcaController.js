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

const getMarca = async (req, res) =>{
    try{
        console.log(req.query)
        const estado = req.query.estado//obtenemos el query de la peticion
        const query = {estado: estado} //Condicionamos la busqueda
        //Find tambien puede ir vacio, y traera todos los registros
        const marcasDB = await Marca.find(query)//En find podemos pasarle un objeto con las condiciones de busqueda
        return res.json(marcasDB)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

const getMarcaByID = async (req, res) =>{
    try{
        const estado = req.query.estado
        const id = req.params.id
        const query = {estado: estado, _id: id}
        const marcaDB = await Marca.findOne(query)
        return res.json(marcaDB)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

const updateMarcaByID = async (req, res) =>{
    try{
        const id = req.params.id
        const data = req.body;
        data.FechaActualizacion = new Date();
        const marca = await Marca.findByIdAndUpdate(id, data, {new: true})
        console.log(marca)
        return res.json(marca)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

const deleteMarcaByID = async (req, res) =>{
    try{
        const id = req.params.id
        const marca = await Marca.findByIdAndDelete(id)
        if(!marca){
            return res.status(404).json({msg: 'No existe el tipo de equipo'})
        }
        return res.status(204).json({msg: 'Tipo de equipo eliminado'})
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { 
    createMarca, 
    getMarca, 
    getMarcaByID, 
    updateMarcaByID, 
    deleteMarcaByID 
}