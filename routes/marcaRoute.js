const {Router} = require('express');
const {createMarca, 
    getMarca, 
    getMarcaByID, 
    updateMarcaByID, 
    deleteMarcaByID } = require('../controllers/tipoEquipoController');

    const router = Router();

    router.post('/', createMarca);
    router.get('/', getMarca);
    router.get('/:id', getMarcaByID);
    router.put('/:id', updateMarcaByID);
    router.delete('/:id', deleteMarcaByID);   

    module.exports = router;