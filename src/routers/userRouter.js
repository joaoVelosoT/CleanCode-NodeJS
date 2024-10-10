const { Router } = require('express');
const userController = require('../controllers/userController');
const router = Router();

router.post('/', userController.create) // funcao de criar

// funcao de editar
router.put('/:id', userController.update);

// funcao de deletar
router.delete('/:id', userController.delete);

// buscar unico
router.get('/:id', userController.getOne);

// buscar todos


router.get('/', userController.getAll);

module.exports = router;