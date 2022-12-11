const {Router} = require('express');

const {getInventarios,
    createInventario,
    getInventarioByID,
    updateInventarioByID,
    deleteInventarioByID,
    uploadImageByID,
    getImageByID
} = require('../controllers/inventarioController');
const validarJwt = require('../middlewares/ValidarJwt')
const { esAdmin } = require('../middlewares/ValidarRol')
const router = Router();

router.post('/',validarJwt, esAdmin, createInventario);
router.get('/',validarJwt, getInventarios);
router.get('/:id',validarJwt, getInventarioByID);
router.put('/:id',validarJwt, esAdmin, updateInventarioByID);
router.delete('/:id',validarJwt, esAdmin, deleteInventarioByID);
router.post('/:id/images',validarJwt, esAdmin, uploadImageByID);
router.get('/:id/images',validarJwt, esAdmin, getImageByID);
module.exports = router;