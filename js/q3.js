'use strict';
var todoTask;
var todoDate;
var todoForm = document.getElementById('todoForm');
var listTasks = document.getElementById('list');
var todos = []; //to sotre the objects
var tasks;
//C.F:
function TodoList(task, date){
  this.task=task;
  this.date=date;
  todos.push(this);
}
todoForm.addEventListener('submit', getTodoInput);
function getTodoInput(event){
  event.preventDefault;
  todoTask = event.target.task.value;
  todoDate = event.target.date.value;
  new TodoList(todoTask, todoDate);
  tasks = JSON.stringify(todos);
  localStorage.setItem('todo tasks', tasks);
  if(tasks){
    renderList();
  }
}
function renderList(){
  var tasksList = localStorage.getItem('todo tasks');
  todos = JSON.parse(tasksList);
  var liEl = document.createElement('li');
  liEl.textContent = todos;
  listTasks.appendChild(liEl);
}

