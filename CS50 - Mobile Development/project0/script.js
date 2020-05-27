const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete'
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

function newTodo() {
  const todoText = prompt("Enter TODO");
  let todoItem = createTodo(todoText);
  list.appendChild(todoItem);
  updateTodos();
  incUncheckedTodos();
}

function createTodo(todoText) {
  let li = document.createElement('li');
  li.setAttribute('class', classNames.TODO_ITEM);
  let span = document.createElement('span');
  span.setAttribute('class', classNames.TODO_TEXT)
  li.appendChild(span);

  // Add Text
  span.appendChild(
    document.createTextNode(todoText)
  );

  // Add Check Box
  let checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('class', classNames.TODO_CHECKBOX);
  checkbox.addEventListener('click', clickTodo);
  span.appendChild(checkbox);


  // Add Delete Box
  
  return li
}

function clickTodo(e) {
  if (e.target.checked){
    decUncheckedTodos()
  } else {
    incUncheckedTodos()
  } 
}


function updateTodos() {
  itemCountSpan.innerHTML = list.childElementCount
}


function incUncheckedTodos() {
  let count = +uncheckedCountSpan.innerHTML
  count++;
  uncheckedCountSpan.innerHTML = count;
}

function decUncheckedTodos() {
  let count = +uncheckedCountSpan.innerHTML
  count--;
  uncheckedCountSpan.innerHTML = count;
}