const {Router} = require('express');

const {getInventarios,
    createInventario,
    getInventarioByID,
    updateInventarioByID,
    deleteInventarioByID
} = require('../controllers/inventarioController');

const router = Router();

router.post('/', createInventario);
router.get('/', getInventarios);
router.get('/:id', getInventarioByID);
router.put('/:id', updateInventarioByID);
router.delete('/:id', deleteInventarioByID);

module.exports = router;