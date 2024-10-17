const {Router} = require('express');
const admController = require('../controllers/admController');
const router = Router();


// Rota para fazer login
router.post('/login', admController.login);

// Rota para criar
router.post('/', admController.create);

// Rota para buscar todos
router.get('/', admController.getAll);

// Rota para buscar unico
router.get('/:id', admController.getOne);

// Rota para atualizar
router.put('/:id', admController.update);

// Rota para deletar
router.delete('/:id', admController.delete);


module.exports = router;