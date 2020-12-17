class Counter {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        this.render();
        this.addEvents();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    render() {
        let HTML = '';

        for (let item of this.data) {
            HTML += `<div class="counter col-3 col-sm-6 col-xs-12">
                        <div class="number">${item.number}${item.type}</div>
                        <div class="label">${item.label}</div>
                    </div>`;
        }

        this.DOM.innerHTML = HTML;
    }

    addEvents() {

    }
}

export { Counter }