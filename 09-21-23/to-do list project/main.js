
// Global Variables
const body = document.body;
const input = document.querySelector('.todo-input');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('#todo-form');
const todoList = document.querySelector('.todo-list');
const muchToDoAboutNothing = [];
const ul = document.querySelector('ul');
let checkboxes=[];









// Event Listeners
input.addEventListener('focusin', focusInput);
input.addEventListener('focusout',endFocus);
ul.addEventListener('change', event => {
  if (event.target.type === 'checkbox') {
    const checked = document.querySelectorAll('input[type="checkbox"]:checked')
    selected = Array.from(checked).map(x => x.value)
    console.log(selected);
    // selected.forEach(isChecked)
  } 
  
});


form.addEventListener('submit', createToDoItem);
// checkboxes.addEventListener('change', isChecked);


function createToDoItem (e){
  e.preventDefault();

  const toDo = input.value;
  const index = Math.floor(Math.random()*100000);
  const toDoContainer = document.createElement('li');
  const newToDo = document.createElement('li');
  const newCheckbox = document.createElement("INPUT");
  newCheckbox.setAttribute("type", "checkbox");
  newCheckbox.setAttribute("class", "checkbox");
  newCheckbox.setAttribute("value",index);
  newCheckbox.setAttribute("name", index);

  toDoContainer.setAttribute("id",index);
  newToDo.innerText = toDo;
  toDoContainer.appendChild(newCheckbox);
  toDoContainer.appendChild(newToDo);
  
  todoList.appendChild(toDoContainer);
  muchToDoAboutNothing.push(toDo);
  saveMyToDos(muchToDoAboutNothing);
  form.reset();
}

function focusInput(){
  body.classList.add('focus-form');
}

function endFocus(){
  if (body.classList.contains('focus-form')) body.classList.remove('focus-Form');
}

function saveMyToDos(toDoS = []){
  localStorage.setItem('todo_list', JSON.stringify(toDoS));
}

function isChecked (index) {
  
  
}
