window.onload = async () => {

    // O teu código aqui...
    const listContainer = document.querySelector("#lists-container");
    const todoHeader = document.querySelector("todo-header");

    
    document.querySelector("#tasks").onclick = () => {

        listContainer.style.transform = "translateX(-100%)";
        todoHeader.state = "items"


    }

    // document.querySelector("#items").onclick = () => {

    //     listContainer.style.transform = "translateX(0%)";

    // }

    todoHeader.addEventListener("Clicked", () => {

        listContainer.style.transform = "translateX(0%)";
        todoHeader.state = "tasks"

    })  
}
