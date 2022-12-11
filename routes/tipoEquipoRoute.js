const {Router} = require('express');
const {createTipoEquipo, 
    getTipoEquipo, 
    getTipoEquipoByID, 
    updateTipoEquipoByID, 
    deleteTipoEquipoByID } = require('../controllers/tipoEquipoController');
const validarJwt = require('../middlewares/ValidarJwt')
const { esAdmin } = require('../middlewares/ValidarRol')
    const router = Router();

    router.post('/',validarJwt, esAdmin, createTipoEquipo);
    router.get('/',validarJwt, getTipoEquipo);
    router.get('/:id',validarJwt, getTipoEquipoByID);
    router.put('/:id',validarJwt, esAdmin, updateTipoEquipoByID);
    router.delete('/:id',validarJwt, esAdmin, deleteTipoEquipoByID);   

    module.exports = router; 