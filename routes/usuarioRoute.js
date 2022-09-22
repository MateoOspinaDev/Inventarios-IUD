const {Router} = require('express');
const {createUsuario, 
    getUsuario, 
    getUsuarioByID, 
    updateUsuarioByID, 
    deleteUsuarioByID } = require('../controllers/usuarioController');

    const router = Router();

    router.post('/', createUsuario);
    router.get('/', getUsuario);
    router.get('/:id', getUsuarioByID);
    router.put('/:id', updateUsuarioByID);
    router.delete('/:id', deleteUsuarioByID);   

    module.exports = router;