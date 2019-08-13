var express = require('express');
var router = express.Router();
var Todo = require('../models/todo')


/* GET todo's from db/models */
router.get('/', function(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll()
  });
});

module.exports = router;
