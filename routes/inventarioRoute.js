const {Router} = require('express');

const {getInventario} = require('../controllers/inventarioController');

const router = Router();

//router.post('/', );
router.get('/', getInventario);
//router.get('/:id', );
//router.put('/:id', );
//router.delete('/:id', );

module.exports = router;