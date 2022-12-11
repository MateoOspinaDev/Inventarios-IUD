const { Router } = require('express')
const { 
    createMarca, 
    getMarca, 
    getMarcaByID,
    updateMarcaByID,
    deleteMarcaByID
}= require('../controllers/marcaController')
const validarJwt = require('../middlewares/ValidarJwt')
const { esAdmin } = require('../middlewares/ValidarRol')

const router = Router()

/**
 * Crea una marca
 */
router.post('/',validarJwt, esAdmin, createMarca)

/**
 * Consulta todas las marcas
 */
router.get('/', validarJwt, getMarca)

/**
 *  Consulta una marca por su ID
 */
router.get('/:id',validarJwt, getMarcaByID)

/**
 * Actualiza una marca por su ID
 */
router.put('/:id',validarJwt, esAdmin, updateMarcaByID)

/**
 * Borra una marca por su ID
 */
router.delete('/:id', validarJwt, esAdmin, deleteMarcaByID)

module.exports = router