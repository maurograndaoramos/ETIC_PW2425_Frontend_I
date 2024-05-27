export default class TodoModel {

    #tasks = [
        {
            title: "List 1",
            items: [
                {
                    title: "Item 1",
                    checked: "false"
                },
                {
                    title: "Item 2",
                    checked: "true"
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

    // TASKS
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

    // CHECK ITEMS
    addItem(taskIndex, item) {
        this.#tasks[taskIndex].items.push(item);
        this.#updateLocalStorage();
    }

    deleteItem(taskIndex, itemIndex) {
        this.#tasks[taskIndex].items.splice(itemIndex, 1);
        this.#updateLocalStorage();
    }

    getItems(taskIndex) {
        return this.#tasks[taskIndex].items;
    }

    updateItem(taskIndex, itemIndex, value) {
        this.#tasks[taskIndex].items[itemIndex].checked = value;
        this.#updateLocalStorage();
    }

    #updateLocalStorage() {
        localStorage.setItem("todos", JSON.stringify(this.#tasks));
    }

}