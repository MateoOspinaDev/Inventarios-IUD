const {Router} = require('express');
const {createTipoEquipo, 
    getTipoEquipo, 
    getTipoEquipoByID, 
    updateTipoEquipoByID, 
    deleteTipoEquipoByID } = require('../controllers/tipoEquipoController');

    const router = Router();

    router.post('/', createTipoEquipo);
    router.get('/', getTipoEquipo);
    router.get('/:id', getTipoEquipoByID);
    router.put('/:id', updateTipoEquipoByID);
    router.delete('/:id', deleteTipoEquipoByID);   

    module.exports = router;