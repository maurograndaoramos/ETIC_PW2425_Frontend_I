import TodoModel from "./TodoModel.js";

window.onload = async () => {

    // O teu código aqui...
    const model = new TodoModel();
    console.log(model.getTasks());


    const listContainer = document.querySelector("#lists-container");
    const todoHeader = document.querySelector("todo-header");


    todoHeader.addEventListener("Clicked", () => {

        listContainer.style.transform = "translateX(0%)";
        todoHeader.state = "tasks"

    });

    const buildTasksList = (tasks) => {
        const taskList = document.querySelector("#tasks");
        taskList.innerHTML = "";

        tasks.forEach(task => {
            const li = document.createElement("li");
            const taskItem = new TaskItem();

            taskItem.addEventListener("clicked", () => {
    
                console.log("Clicked")
    
                listContainer.style.transform = "translateX(-100%)";
                todoHeader.state = "items"
    
                todoHeader.taskName = ""
    
            });
            taskItem.addEventListener("deleted", () => {

                console.log("Delete item")
        
            });

            taskItem.title = task.title;

            taskList.appendChild(li);
            li.appendChild(taskItem);
        });
    };

    buildTasksList(model.getTasks());

}
