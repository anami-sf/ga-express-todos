const todos = [
    {todo: 'Feed Dogs', done: true},
    {todo: 'Learn Express', done: false},
    {todo: 'Buy Milk', done: false}
  ];

const getAll = () => {
    return todos;
}

const getOne = (id) => {
 return todos(id)
}

const create = (todo) => {
    //splice params: (start, items to delete)
    todos.push(todo)
}

const deleteOne = (id) => {
    todos.splice(id, 1)
}

const update = (id, todo) => {
    todos[id] = todo
}


module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}    
