const {Router} = require('express');
const {createUsuario, 
    getUsuario, 
    getUsuarioByID, 
    updateUsuarioByID, 
    deleteUsuarioByID } = require('../controllers/usuarioController');
const validarJwt = require('../middlewares/ValidarJwt')
const { esAdmin } = require('../middlewares/ValidarRol')
    const router = Router();

    router.post('/',validarJwt, esAdmin, createUsuario);
    router.get('/',validarJwt, getUsuario);
    router.get('/:id',validarJwt, getUsuarioByID);
    router.put('/:id',validarJwt, esAdmin, updateUsuarioByID);
    router.delete('/:id',validarJwt, esAdmin, deleteUsuarioByID);   

    module.exports = router;