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
    todos.push(todo)
}


module.exports = {
    getAll,
    getOne,
    create
}    
