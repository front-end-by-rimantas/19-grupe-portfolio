class Counter {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;

        this.DOM = null;
        this.countersDOMs = null;

        this.animationDuration = 5;
        this.animationFPS = 30;

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
        this.countersDOMs = this.DOM.querySelectorAll('.counter');
    }

    counterAnimation(counterIndex) {
        let count = 0;

        const numberDOM = this.countersDOMs[counterIndex].querySelector('.number');

        const timer = setInterval(() => {
            numberDOM.innerText = count++ + this.data[counterIndex].type;

            if (this.data[counterIndex].number === count) {
                clearInterval(timer);
            }
        }, 1000 / this.animationFPS)
    }

    addEvents() {
        console.log(this.countersDOMs);

        addEventListener('scroll', () => {
            const windowBottom = scrollY + innerHeight;
            let counterBottom = 0;

            for (let i = 0; i < this.countersDOMs.length; i++) {
                if (this.data[i].animated) {
                    continue;
                }

                const counter = this.countersDOMs[i];
                counterBottom = counter.clientHeight + counter.offsetTop;

                if (counterBottom < windowBottom) {
                    this.data[i].animated = true;
                    this.counterAnimation(i);
                }
            }
        })
    }
}

export { Counter }