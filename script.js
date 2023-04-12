// Step 1 find the element
let addTaskButton = document.getElementById("add-task");
let newTaskInput = document.getElementById("task-input");
let todoListContainer = document.getElementById("todo-list");
let templateContainer = document.getElementById("list-item-template");
let resetbutton = document.getElementById('resetbutton;')
let template = templateContainer.innerHTML

// Step 2 Write the behaviour
function onAddTaskClicked(event) {
    let taskName = newTaskInput.value;
    newTaskInput.value = "";
    let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
    todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);
}

function onTodoListContainerClicked(event){
   let targetElement = event.toElement;
   
   while (!targetElement.classList.contains("task")){
      targetElement = targetElement.parentElement;
   } 
   
   let checkbox = targetElement.querySelector(".checkbox");
   if (checkbox.checked){
      targetElement.classList.add("completed")
   } else {
      targetElement.classList.remove("completed")
   }
}
// Step 3 link to event handler
addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodoListContainerClicked);
resetButton.addEventListener('click', onResetClicked);