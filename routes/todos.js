var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

/* GET todo's from db/models */
router.get('/', todosCtrl.index);
router.get('/new', todosCtrl.new);
router.get('/:id', todosCtrl.show);
router.get('/:id/edi', todosCtrl.edit)
router.post('/', todosCtrl.create);
router.delete('/:id', todosCtrl.delete);

module.exports = router;
