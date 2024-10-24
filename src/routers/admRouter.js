const {Router} = require('express');
const admController = require('../controllers/admController');
const validateAdm = require('../middlewares/validateAdm');
const router = Router();


// Rota para esqueci a senha
router.post('/esqueciasenha', admController.esqueciasenha);
 


// Rota para criar
router.post('/', validateAdm, admController.create);

// Rota para buscar todos
router.get('/', admController.getAll);

// Rota para buscar unico
router.get('/:id', admController.getOne);

// Rota para atualizar
router.put('/:id', admController.update);

// Rota para deletar
router.delete('/:id', admController.delete);


module.exports = router;