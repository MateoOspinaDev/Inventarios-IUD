const {Router} = require('express');
const {createEstadoEquipo, 
    getEstadoEquipo, 
    getEstadoEquipoByID, 
    updateEstadoEquipoByID, 
    deleteEstadoEquipoByID } = require('../controllers/estadoEquipoController');
const validarJwt = require('../middlewares/ValidarJwt')
const { esAdmin } = require('../middlewares/ValidarRol')
    const router = Router();

    router.post('/',validarJwt, esAdmin, createEstadoEquipo);
    router.get('/',validarJwt, getEstadoEquipo);
    router.get('/:id',validarJwt, getEstadoEquipoByID);
    router.put('/:id',validarJwt, esAdmin, updateEstadoEquipoByID);
    router.delete('/:id',validarJwt, esAdmin, deleteEstadoEquipoByID);   

    module.exports = router;