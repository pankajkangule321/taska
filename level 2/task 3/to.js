const form = document.querySelector('form');
const input = document.querySelector('input');
const taskList = document.querySelector('#task-list');
const tasks = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const task = input.value;
 
