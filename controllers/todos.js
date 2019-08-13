var Todo = require('../models/todo');

const index = (req, res) => {
    res.render('todos/index', {
      todos: Todo.getAll(),
      time: req.time
    })
}

const show = (req, res) => {
    res.render('todos/show', {     
        todo: Todo.getOne(req.aparms.id),
        //This is how we retrieve URL parameters(route parameters)
        todoNum: parseInt(req.params.id) + 1
    })
}

const newTodo= (req, res) => {
    res.render( 'todos/new')
}

const create = (req, res) => {
    console.log(req.body)
    req.body.done = false
    //Todo is the moder, crate is a function in the Todo model
    Todo.create(req.body)
    res.redirect('/todos')
}

const deleteTodo = (req, res) => {
    Todo.deleteOne(req.params.id)
    res.redirect('/todos')
}

const edit = (req, res) => {
    var todo = Todo.getOne(req.params.id)
    res.render('todos/edit', {
        todo,
        todoIdx: req.aparams.id
    })
}

const update = (req, res) => {
    req.body.done = !!req.body.done
    Todo.update(req.params.id, req.body)
    res.redirect(`/todos/${req.params.id}`)
}

module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteTodo,
    edit,
    update
}