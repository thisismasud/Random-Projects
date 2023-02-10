//Selectors
const addTodoButton = document.querySelector('.add_todo')
const todoInput = document.querySelector('#todo-input');
const todoUl = document.querySelector(".todo-list");
const todoList = document.querySelector('.todo-list');
const filterOptions = document.querySelector('.filter-todo');
let todoDiv;

//Event Listeners
addTodoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheckTodo);
filterOptions.addEventListener("click", filterTodo)

//Functions
function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    //Creating todo div
    todoDiv = document.createElement('div');
    todoDiv.classList.add("todoDiv");
    

    //Creating an li for todo div
    const todo = document.createElement("li");
    todo.classList.add("todo-li");
    if(todoInput.value == ''){
        alert("Please Enter todo")
        return false;
    }
    todo.innerText = todoInput.value;
    todoDiv.appendChild(todo);

    //Complete Button
    const completedBtn = document.createElement("button");
    completedBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedBtn.classList.add("check-btn");
    todoDiv.appendChild(completedBtn);

    //Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';
    deleteBtn.classList.add("delete-btn");
    todoDiv.appendChild(deleteBtn);

    //append it to the list
    todoList.appendChild(todoDiv);
    //Clear Input field
    todoInput.value = '';
}
function deleteCheckTodo(e){
    let event = e.target;
    if(event.classList[0] === "delete-btn"){
        const item = event.parentElement;
        item.classList.add("fall");
        item.addEventListener("transitionend", ()=>{
            item.remove()
        })
    }

    if(event.classList[0] === "check-btn"){
        const todo = event.parentElement;
        todo.classList.toggle("completed")
    }
}
function filterTodo(e) {

    const todos = todoList.childNodes;

    todos.forEach(function (todo) { 
        const mStyle = todo.style; 
        if(mStyle != undefined && mStyle != null){
            switch (e.target.value) {
                case "all":
                    mStyle.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains('completed')) {
                        mStyle.display = 'flex';
                    } else {
                        mStyle.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (todo.classList.contains('completed')){
                        mStyle.display = 'none';
                    }
                    else{
                        mStyle.display = "flex";
                    }
                    break;
            }
        }
    })
}