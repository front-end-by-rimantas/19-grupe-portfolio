class Slider {
    constructor(params) {
        this.selector = params.selector || 'body';
        this.data = params.data || [];
        this.renderEngine = params.renderEngine || null;
        this.isArrowControlsVisible = params.isArrowControlsVisible || false;
        this.isDotControlsVisible = params.isDotControlsVisible || true;
        this.maxItems = params.maxItems || 5;
        this.cloneCount = params.cloneCount || 2;
        this.visibilityStrategy = params.visibilityStrategy || 'random';
        this.itemsPerView = params.itemsPerView || 1;

        this.DOM = null;
        this.listDOM = null;
        this.controlsDOM = null;
        this.dotsDOMs = null;
        this.arrowsDOMs = null;
        this.activeDotIndex = 0;

        this.init();
    }

    init() {
        // TODO: input (params) validation
        // TODO: blogiems reikia priskirti default reiksmes
        if (!this.isValidSelector()) {
            return;
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

    generateControls() {
        let HTML = '';

        if (!this.isArrowControlsVisible && !this.isDotControlsVisible) {
            return HTML;
        }

        const itemsCount = this.data.length;
        let dotsHTML = '<div class="dot active"></div>';
        dotsHTML += '<div class="dot"></div>'.repeat(itemsCount - this.itemsPerView);

        HTML = `<div class="controls">
                    ${this.isArrowControlsVisible ? '<i class="fa fa-angle-left"></i>' : ''}
                    ${this.isDotControlsVisible ? dotsHTML : ''}
                    ${this.isArrowControlsVisible ? '<i class="fa fa-angle-right"></i>' : ''}
                </div>`;

        return HTML;
    }

    generateItems() {
        let HTML = '';
        const itemWidth = 100 / (this.data.length + 2 * this.cloneCount) / this.itemsPerView;
        const dataCopy = [this.data[3], this.data[4], ...this.data, this.data[0], this.data[1]];

        for (let item of dataCopy) {
            const itemObject = new this.renderEngine(item);

            if (!itemObject.isValid()) {
                continue;
            }

            HTML += `<div class="item" style="width: ${itemWidth}%;">
                        ${itemObject.generateHTML()}
                    </div>`;
        }
        return HTML;
    }

    render() {
        const listWidth = (this.data.length + 2 * this.cloneCount) * 100;
        const marginLeft = this.cloneCount * (-100 / this.itemsPerView);

        const HTML = `<div class="slider">
                        <div class="view">
                            <div class="list" style="width: ${listWidth}%; margin-left: ${marginLeft}%;">
                                ${this.generateItems()}
                            </div>
                        </div>
                        ${this.generateControls()}
                    </div>`;

        this.DOM.innerHTML = HTML;

        this.listDOM = this.DOM.querySelector('.list');

        if (this.isArrowControlsVisible || this.isDotControlsVisible) {
            this.controlsDOM = this.DOM.querySelector('.controls');

            if (this.isArrowControlsVisible) {
                this.arrowsDOMs = this.controlsDOM.querySelectorAll('.fa');
            }

            if (this.isDotControlsVisible) {
                this.dotsDOMs = this.controlsDOM.querySelectorAll('.dot');
            }
        }
    }

    clickDot(dotIndex) {
        const dot = this.dotsDOMs[dotIndex];
        this.listDOM.style.marginLeft = -100 * (dotIndex + this.cloneCount) / this.itemsPerView + '%';
        this.dotsDOMs[this.activeDotIndex].classList.remove('active');
        this.activeDotIndex = dotIndex;
        dot.classList.add('active');
    }

    addEvents() {
        if (this.isDotControlsVisible) {
            for (let i = 0; i < this.dotsDOMs.length; i++) {
                const dot = this.dotsDOMs[i];

                dot.addEventListener('click', () => {
                    this.clickDot(i);
                })
            }
        }

        if (this.isArrowControlsVisible) {
            this.arrowsDOMs[0].addEventListener('click', () => {
                let dotIndex = this.activeDotIndex - 1;
                if (dotIndex === -1) {
                    dotIndex = this.data.length - 1;
                }
                this.clickDot(dotIndex);
            })
            this.arrowsDOMs[1].addEventListener('click', () => {
                let dotIndex = this.activeDotIndex + 1;
                if (dotIndex === this.data.length) {
                    dotIndex = 0;
                }
                this.clickDot(dotIndex);
            })
        }
    }
}

export { Slider }