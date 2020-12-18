class Counter {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;

        this.DOM = null;
        this.countersDOMs = null;

        this.animationDuration = 3;
        this.animationFPS = 30;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }
        this.render();
        this.addEvents();

        this.shouldCounterAnimationRun();
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
                        <div class="number">0${item.type}</div>
                        <div class="label">${item.label}</div>
                    </div>`;
        }

        this.DOM.innerHTML = HTML;
        this.countersDOMs = this.DOM.querySelectorAll('.counter');
    }

    counterAnimation(counterIndex) {
        const targetNumber = this.data[counterIndex].number;
        const totalTickCount = this.animationFPS * this.animationDuration;
        const numberDOM = this.countersDOMs[counterIndex].querySelector('.number');
        let count = 0;
        let tick = 0;

        const timer = setInterval(() => {
            count = Math.floor(tick / totalTickCount * targetNumber);
            tick++;

            numberDOM.innerText = count + this.data[counterIndex].type;

            if (targetNumber === count) {
                clearInterval(timer);
            }
        }, 1000 / this.animationFPS)        // 250ms
    }

    shouldCounterAnimationRun() {
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
    }

    addEvents() {
        addEventListener('scroll', this.shouldCounterAnimationRun.bind(this));
    }
}

export { Counter }