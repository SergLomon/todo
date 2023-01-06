const form = document.querySelector('.form');
const addFormInput = document.querySelector('.add-form-input');
const todoList = document.querySelector('.todo-list');
const clearFormButton = document.querySelector('.clear-form-button');
let tasks = [];

// Добавление задачи
form.addEventListener('submit', addTask);

// Функция добавления задачи
function addTask (event) {
// Отменяем отправку формы
event.preventDefault();
// Получаем текс задачи из поля ввода
const taskText = addFormInput.value;
// Описываем задачу в виде объекта
const newTask = {
  id: Date.now(),
  text: taskText,
  done: false
};
// Добавляем задачу в массив
tasks.push(newTask);
// вызываем фукцию renderTask
renderTasks(newTask);
// Очищаем поле ввода
addFormInput.value = ""; 


// Удаление задачи
todoList.addEventListener('click', deleteTask);

// Функция удаления задачи
function deleteTask(event) {
//Проверяем что клик был по кнопке "Удалить задачу" (крестик)
  if (event.target.id === "dele") {
    const deleEl = event.target.closest('li');
// Определяем ID задачи
const id = Number(deleEl.id);
// // Находим индекс задачи в массиве (1 способ)
// const index = tasks.findIndex((task) => task.id === id);
// // Удаляем задачу из массива
//   tasks.splice(index, 1)
//Удаляем задачу через фильтрацию массива
tasks = tasks.filter((task) => task.id !== id);
// Удаляем задачу из разметки
    deleEl.remove();
  }
}

// Отмечаем задачу завершенной
todoList.addEventListener('click', doneTask)

// Функция задача отмечена завершенной
function doneTask(event) {
  if (event.target.id === "done") {
    const doneEl = event.target.closest('li');
// Определяем ID задачи (можно изменить на стрелочную функцию)
    const id = Number(doneEl.id);
    const task = tasks.find(function(task) {
        if (task.id === id) {
          return true;
        }
    })
// Меняем статус задачи в объекте
    task.done = !task.done;
// Добаляем/убираем класс в разметке (задача выполнена  или нет)   
   doneEl.classList.toggle('mystyle');
   
  }
}

// Функция отображения элементов на странице (render)
function renderTasks(task) {
// Формируем CSS класс
const cssClass = newTask.done ? 'todo-list-item mystyle' : 'todo-list-item'
// Добывляем в разметку новую задачу
const taskHTML = `
  <li class="${cssClass}" id="${newTask.id}">
      <input class="todo-list-dele" id="dele" type="image" src="job delete.svg" alt="Удалить дело" width="18" height="18">
      <input class="todo-list-input" id="done"  type="checkbox">
      <span>${newTask.text}</span>
  </li>`;
// Отображаем на странице новую задачу
todoList.insertAdjacentHTML('beforeend', taskHTML);
  }
}

//Начать новый список
// clearFormButton.addEventListener('click', function () {
//   const deleEl = document.querySelectorAll('li');
//   console.log(deleEl);
//   deleEl.remove();
//   //tasks.splice(0);
// });

  
