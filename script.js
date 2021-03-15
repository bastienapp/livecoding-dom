const todoList = document.getElementById('todos');

const btAddTodo = document.getElementById('add-todo');
btAddTodo.addEventListener('click', function () {
  const todo = document.getElementById('todo');
  if (todo.value !== '') {
    const newTask = document.createElement('li');
    newTask.textContent = todo.value;
    todoList.appendChild(newTask);
  
    todo.value = '';
  }
});
