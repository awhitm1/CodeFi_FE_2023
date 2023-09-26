// Global Variables
var body = document.body;
var input = document.querySelector('.todo-input');
var overlay = document.querySelector('.overlay');
var form = document.querySelector('#todo-form');
var todoList = document.querySelector('.todo-list');
var muchToDoAboutNothing = [];
var ul = document.querySelector('ul');
var itemsArray = localStorage.getItem('todo_list') ?
    JSON.parse(localStorage.getItem('todo_list')) : [];
console.log(itemsArray);
populateToDoList();
// Event Listeners
input.addEventListener('focusin', focusInput);
input.addEventListener('focusout', endFocus);
overlay.addEventListener('click', endFocus);
form.addEventListener('submit', createToDoItem);
// Functions
function createToDoItem(e) {
    e.preventDefault();
    // need to prevent empty items
    if (input.value === "") {
        alert("You must enter a task!");
    }
    else {
        var toDo = input.value;
        var index = Math.floor(Math.random() * 100000);
        var toDoContainer_1 = document.createElement('li');
        var newToDo = document.createElement('label');
        var newCheckbox = document.createElement("INPUT");
        var trashCan = document.createElement("i");
        var trashCanButton = document.createElement("button");
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
        toDoContainer_1.appendChild(newCheckbox);
        toDoContainer_1.appendChild(newToDo);
        todoList.appendChild(toDoContainer_1);
        // Trash can event listener
        trashCanButton.addEventListener('click', function (e) {
            console.log(toDoContainer_1.innerText);
            localStorage.removeItem(toDoContainer_1.innerText);
            toDoContainer_1.parentNode.removeChild(toDoContainer_1);
            // localStorage.removeItem();
        });
        // Saving to local storage
        muchToDoAboutNothing.push(toDo);
        saveMyToDos(muchToDoAboutNothing);
    }
    form.reset();
}
function focusInput() {
    body.classList.add('focus-form');
}
function endFocus() {
    if (body.classList.contains('focus-form'))
        body.classList.remove('focus-form');
}
function saveMyToDos(toDoS) {
    if (toDoS === void 0) { toDoS = []; }
    localStorage.setItem('todo_list', JSON.stringify(toDoS));
}
function deleteMyToDos(toDoContainer) {
}
function populateToDoList() {
    var _loop_1 = function (i) {
        var toDo = itemsArray[i];
        var index = Math.floor(Math.random() * 100000);
        var toDoContainer = document.createElement('li');
        var newToDo = document.createElement('label');
        var newCheckbox = document.createElement("INPUT");
        var trashCan = document.createElement("i");
        var trashCanButton = document.createElement("button");
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
        trashCanButton.addEventListener('click', function (e) {
            console.log(toDoContainer.innerText);
            localStorage.removeItem(toDoContainer.innerText);
            toDoContainer.parentNode.removeChild(toDoContainer);
        });
    };
    for (var i = 0; i <= itemsArray.length - 1; i++) {
        _loop_1(i);
    }
}
;
