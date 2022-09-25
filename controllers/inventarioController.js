const Inventario = require('../models/inventario');
const { request,response } = require('express');

/**
 * Consulta todos los registros de la tabla inventario
 */

const getInventario = async (req=request, res=response) =>{
    try{
        const inventario = await Inventario.find();
        //TODO: Hacer Join
        res.json(inventario);
    }catch{
        res.status(500).json({
            msg: 'Error al obtener los datos'
        });
    }
    
}

module.exports = { getInventario }






