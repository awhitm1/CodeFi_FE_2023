
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
input.addEventListener('focusout', endFocus);
overlay.addEventListener('click', endFocus);
form.addEventListener('submit', createToDoItem);

// Functions

function createToDoItem (e){
  e.preventDefault();
  // need to prevent empty items
  const toDo = input.value;
  const index = Math.floor(Math.random()*100000);
  const toDoContainer = document.createElement('li');
  const newToDo = document.createElement('label');
  const newCheckbox = document.createElement("INPUT");
  const trashCan = document.createElement("i");
  const trashCanButton = document.createElement("button");
  
  trashCanButton.setAttribute("class", "btn-trash");
  trashCan.setAttribute("class", "todo-trash");
  
  newCheckbox.setAttribute("type", "checkbox");
  newCheckbox.setAttribute("class", "checkbox");
  newCheckbox.setAttribute("id",index);
  newCheckbox.setAttribute("name", index);
  
  newToDo.setAttribute("for", index);
  newToDo.setAttribute("class", "strikeThrough");
  newToDo.innerText = toDo;
  
  trashCanButton.appendChild(trashCan);
  newToDo.appendChild(trashCanButton);
  toDoContainer.appendChild(newCheckbox);
  toDoContainer.appendChild(newToDo);
  todoList.appendChild(toDoContainer);

  // Trash can event listener
  trashCanButton.addEventListener('click', e => {
    toDoContainer.parentNode.removeChild(toDoContainer)
  });

  // Saving to local storage
  muchToDoAboutNothing.push(toDo);
  saveMyToDos(muchToDoAboutNothing);


  form.reset();
}

function focusInput(){
  body.classList.add('focus-form');
}

function endFocus(){
  if (body.classList.contains('focus-form')) body.classList.remove('focus-form');
}

function saveMyToDos(toDoS = []){
  localStorage.setItem('todo_list', JSON.stringify(toDoS));
}




