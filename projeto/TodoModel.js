export default class TodoModel {

    #tasks = [
        {
            title: "List 1",
            item: [
                {
                    title: "Item 1",
                    checked: "false"
                },
                {
                    title: "Item 2",
                    checked: "false"
                },
                {
                    title: "Item 3",
                    checked: "false"
                }
            ]
        }
    ]

    constructor() {
        if (!localStorage.getItem("todos")) {
            localStorage.setItem("todos", JSON.stringify(this.#tasks));
        }
    }

    addTask(task) {
        this.#tasks.push(task);
        this.#updateLocalStorage();
    }

    deleteTask(index) {
        this.#tasks.splice(index, 1);
        this.#updateLocalStorage();
    }

    getTasks() {
        return JSON.parse(localStorage.getItem("todos"));
    }

    #updateLocalStorage() {
        localStorage.setItem("todos", JSON.stringify(this.#tasks));
    }

}