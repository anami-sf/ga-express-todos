var Todo = require('../models/todo');

const index = (req, res) => {
    res.render('todos/index', {
      todos: Todo.getAll()
    })
}

module.exports = {
    index: index
}