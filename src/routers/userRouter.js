const { Router } = require('express');
const userController = require('../controllers/userController');
const { validateUser, validateUserId } = require('../middlewares/validateUser');
const authenticateToken = require('../middlewares/validateToken');
const router = Router();

router.post('/', validateUser, userController.create) // funcao de criar

// funcao de editar
router.put('/:id', validateUser, validateUserId, userController.update);

// funcao de deletar
router.delete('/:id', authenticateToken, validateUserId, userController.delete);

// buscar unico
router.get('/:id', validateUserId, userController.getOne);

// buscar todos
router.get('/', userController.getAll);

module.exports = router;