var express = require('express');
var router = express.Router();
var Todo = require('../models/todo')
var todosCtrl = require('../controllers/todos');


/* GET todo's from db/models */
router.get('/', todosCtrl.index);

module.exports = router;
