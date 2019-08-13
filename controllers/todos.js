var Todo = require('../models/todo');

const index = (req, res) => {
    res.render('todos/index', {
      todos: Todo.getAll(),
      time: req.time
    })
}

const show = (req, res) => {
    res.render('todos/show', {
        //This is how we retrieve URL parameters(route parameters)
        todo: Todo.getOne(req.aparms.id),
        todoNum: parseInt(req.params.id) + 1
    })
}

const newTodo= (req, res) => {
    res.render( 'todos/new')
}

module.exports = {
    index,
    show,
    new: newTodo
}