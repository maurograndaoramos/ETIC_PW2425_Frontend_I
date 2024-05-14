// class WordCounter {

//     #view;

//     constructor() {
//         this.#view = document.querySelector(".word-counter");
//     }

//     get numbWords () {
//         return this.innerText.split(" ").length;
//     }

//     set innerText (text) {
//         this.#view.querySelector("p").innerText = text;
//     }

//     get innerText () {
//         return this.#view.querySelector("p").innerText;
//     }
// }

class WordCounter extends HTMLElement {
    constructor() {
        super();

        console.log("WordCounter created");
    }

    static get observedAttributes() {
        return ['name'];
    }

    createElement(elementType, content) {
        const element = document.createElement(elementType);
        element.textContent = content;
        this.appendChild(element);
    }

    createAudioElement(src) {
        const audio = document.createElement("audio");
        audio.src = src;
        audio.controls = true;
        this.appendChild(audio);
    }

    connectedCallback() {
        console.log("Connected");
    }

    disconnectedCallback() {
        console.log("Disconnected");
    }

    adoptedCallback() {
        console.log("Moved to new page");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
    }
    

    get numbWords () {
        return this.querySelector("p").innerText.split(" ").length;
    }
}




customElements.define("word-counter", WordCounter);

window.onload = () => {

    const wordCounter = document.querySelector("word-counter");

    // const counter = new WordCounter();
    // console.log(counter.numbWords);
    // console.log(counter.innerText);

    // wordCounter.innerHTML = "<p>Hello World</p>";

    // const p = wordCounter.querySelector("p");
    // console.log(wordCounter.numbWords);
    // // console.log(counter.numbWords);
    wordCounter.createElement("button", "Play")
    wordCounter.createAudioElement("https://file-examples.com/storage/fe92070d83663e82d92ecf7/2017/11/file_example_MP3_1MG.mp3");
    wordCounter.setAttribute("name", "new-class-name");
    // document.body.removeChild(document.querySelector("word-counter"));


}