const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todo";

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
  const delLi = event.target.parentElement;
  delLi.remove();
  toDos = toDos.filter((toDo) => toDo.id != parseInt(delLi.id));
  saveToDos();
}

function paintToDo(newTodo){
  const toDo = document.createElement("li");
  toDo.id = newTodo.id;
  const toDoText = document.createElement("span");
  toDoText.innerText = newTodo.text;
  const delBtn = document.createElement("button");
  delBtn.innerText = "🚀";
  delBtn.addEventListener("click", deleteToDo);
  toDo.appendChild(toDoText);
  toDo.appendChild(delBtn);
  toDoList.appendChild(toDo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}