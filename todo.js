const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoDiv = document.getElementById("todo-div");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let todos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteToDo(e){
 const li = e.target.parentElement;
 li.remove();
 console.log(li.id);
 todos = todos.filter((item) => item.id !== parseInt(li.id));
 saveToDos();
 if (todos.length === 0) {
    toDoDiv.classList.add(HIDDEN_CLASSNAME);
 }else{
    toDoDiv.classList.remove(HIDDEN_CLASSNAME);
 }
}

function paintToDo(todoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.classList.add("iconButton");
    const icon = document.createElement("i");
    icon.classList.add("fa");
    icon.classList.add("fa-close");
    button.appendChild(icon);
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);

    li.id = todoObj.id;
    span.innerText = todoObj.text;
    toDoList.appendChild(li);
}

function handleToDoSubmit(e){
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const todoObj = {
        text: newToDo,
        id: Date.now(),
    };
    
    todos.push(todoObj);
    paintToDo(todoObj);
    saveToDos()
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parsedToDos = JSON.parse(savedTodos);
    todos = parsedToDos;
    if(todos.length !== 0){
        toDoDiv.classList.remove(HIDDEN_CLASSNAME);
        parsedToDos.forEach(paintToDo);
    }
}