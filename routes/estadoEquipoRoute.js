const {Router} = require('express');
const {createEstadoEquipo, 
    getEstadoEquipo, 
    getEstadoEquipoByID, 
    updateEstadoEquipoByID, 
    deleteEstadoEquipoByID } = require('../controllers/estadoEquipoController');

    const router = Router();

    router.post('/', createEstadoEquipo);
    router.get('/', getEstadoEquipo);
    router.get('/:id', getEstadoEquipoByID);
    router.put('/:id', updateEstadoEquipoByID);
    router.delete('/:id', deleteEstadoEquipoByID);   

    module.exports = router;