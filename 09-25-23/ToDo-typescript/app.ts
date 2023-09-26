// Global Variables
const body: HTMLElement = document.body;
const input: Element | null = document.querySelector('.todo-input');
const overlay: HTMLBodyElement | null = document.querySelector('.overlay');
const form: HTMLFormElement | null = document.querySelector('#todo-form');
const todoList: HTMLBodyElement | null = document.querySelector('.todo-list');
const muchToDoAboutNothing: [] = [];
const ul: HTMLUListElement | null = document.querySelector('ul');
let itemsArray: [] = localStorage.getItem('todo_list') ? 
JSON.parse(localStorage.getItem('todo_list')) : [];
console.log(itemsArray);
populateToDoList();

// Event Listeners
input.addEventListener('focusin', focusInput);
input.addEventListener('focusout', endFocus);
overlay.addEventListener('click', endFocus);
form.addEventListener('submit', createToDoItem);

// Functions

function createToDoItem (e){
  e.preventDefault();
  // need to prevent empty items
  if (input.value ==="") {
    alert("You must enter a task!")
  } else {
  const toDo: string = input.value;
  const index: number = Math.floor(Math.random()*100000);
  const toDoContainer: HTMLUListElement = document.createElement('li');
  const newToDo = document.createElement('label');
  const newCheckbox = document.createElement("INPUT");
  const trashCan = document.createElement("i");
  const trashCanButton = document.createElement("button");
  
  trashCanButton.setAttribute("class", "btn-trash");
  trashCan.setAttribute("class", "todo-trash");
  
  newCheckbox.setAttribute("type", "checkbox");
  newCheckbox.setAttribute("class", "checkbox");
  newCheckbox.setAttribute("id", index);
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
    console.log(toDoContainer.innerText);
    localStorage.removeItem(toDoContainer.innerText);
    toDoContainer.parentNode.removeChild(toDoContainer);
    
    // localStorage.removeItem();
    });

  // Saving to local storage
  muchToDoAboutNothing.push(toDo);
  saveMyToDos(muchToDoAboutNothing);

    }
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

function deleteMyToDos(toDoContainer) {

}

function populateToDoList() {
  for (let i = 0; i<=itemsArray.length-1; i++){
  const toDo = itemsArray[i] ;
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
    console.log(toDoContainer.innerText);
    localStorage.removeItem(toDoContainer.innerText);
    toDoContainer.parentNode.removeChild(toDoContainer);
    
    });
  
}};