const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
    <style>
        @import url("system.css");

        :host {
            background-color: var(--color-primary);
        }

        header {
            display: flex;
            align-items: center;
            padding: var(--v-padding) var(--h-padding);
            gap: var(--gap);

        }

        header * {
            margin: 0;
            padding: 0;
        }

        h1 {
            color: var(--color-text-light);
            font-size: clamp(32px, 4vw, 48px);
        }

        p {
            display: none;
            font-size: clamp(16px, 4vw, 24px);
            color: var(--color-text-dark)
            font-style: italic;
            text-transform: capitalize;
        
        }

        .icon {
            display: none;
            width: 48px;
            height: 48px;
            margin-left: auto;

    </style>

    <header>
        <h1>TODOs</h1>
        <p>Task name</p>
        <div class="icon">
            <svg width="100%" height="100%" viewBox="0 0 24.342 24.342" fill="var(--color-text-light")>
                <path d="m9.5578 24.342h-9.5578v-14.193l12.171-10.149 12.171 10.149v14.193h-9.5578v-7.5914h-5.226z"/>
            </svg>
        </div>
    </header>

`;

class TodoHeader extends HTMLElement {

    static observedAttributes = ['state'];

    shadowRoot;
    #taskName;
    #icon;

    constructor() {
        super();

        this.shadowRoot = this.attachShadow({ mode: 'closed' });
        this.shadowRoot.append(headerTemplate.content.cloneNode(true));

        this.#taskName = this.shadowRoot.querySelector('p');
        this.#icon = this.shadowRoot.querySelector('.icon');

        this.#icon.onclick = () => this.dispatchEvent(new CustomEvent('Clicked'));
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName === 'state') {

            if (newVal === 'tasks') {
                this.#taskName.style.display = 'none';
                this.#icon.style.display = 'none';
            } 
            else {
                this.#taskName.style.display = 'initial';
                this.#icon.style.display = 'initial';
            }
        }
    }
    


    get state() {
        return this.getAttribute('state');
    };

    set state(val) {
        this.setAttribute('state', val);
    };
}

customElements.define('todo-header', TodoHeader);
