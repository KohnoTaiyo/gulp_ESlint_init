'use strict';

const addTask = document.querySelector('.add');
const lists = document.querySelector('.lists');

const createTodoList = task => {
  const taskList = document.createElement('li');
  const removeButton = document.createElement('i');
  removeButton.classList.add('fas', 'fa-trash-alt', 'delete');// fontawesome

  taskList.innerText = task;
  taskList.append(removeButton);

  lists.appendChild(taskList);
};

addTask.addEventListener('submit', e => {
  e.preventDefault();

  const task = addTask.add.value.trim();
  if (task) {
    createTodoList(task);
    addTask.reset();
  } else {
    alert('入力してください。');
  }
});

lists.addEventListener('click', e => {
  e.target.closest('li').remove();
  console.log('a');
});