import TodoModel from "./TodoModel.js";

window.onload = async () => {

    // O teu código aqui...
    let currentTaskIndex;

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

        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            const taskItem = new TaskItem();

            taskItem.addEventListener("clicked", () => {
    
                listContainer.style.transform = "translateX(-100%)";
                todoHeader.state = "items"
    
                todoHeader.taskName = task.title;
                buildItemsList(task.items);
                currentTaskIndex = index;
    
            });
            taskItem.addEventListener("deleted", () => {
                model.deleteTask(index);
                buildTasksList(model.getTasks());
        
            });

            taskItem.title = task.title;

            taskList.append(li);
            li.append(taskItem);
        });
    };

    const buildItemsList = (items) => {

        const checkItemsList = document.querySelector("#items");
        checkItemsList.innerHTML = "";

        items.forEach((item, index) => {
            const li = document.createElement("li");
            const checkItem = new CheckItem ();
            checkItem.addEventListener("checked", (ev) => {
                console.log(ev.detail.checked)
            });
            checkItem.addEventListener("deleted", () => {
                model.deleteItem(currentTaskIndex, index);
                buildItemsList(model.getItems(currentTaskIndex));
                console.log("Delete check item")
        
            });
            checkItem.title = item.title;
            checkItem.checked = item.checked;

            li.append(checkItem);
            checkItemsList.append(li);
    });}

    buildTasksList(model.getTasks());


}
