class Testimonials {
    constructor(params) {
        this.selector = params.selector || 'body';
        this.data = params.data || [];
        this.isArrowControlsVisible = params.isArrowControlsVisible || false;
        this.isDotControlsVisible = params.isDotControlsVisible || true;
        this.maxItems = params.maxItems || 5;
        this.cloneCount = params.cloneCount || 2;
        this.visibilityStrategy = params.visibilityStrategy || 'random';

        this.DOM = null;
        this.listDOM = null;
        this.controlsDOM = null;
        this.dotsDOMs = null;
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

    isValidTestimonial(testimonial) {
        return true;
    }

    generateStars(rating) {
        const maxStars = 5;
        let HTML = '<i class="fa fa-star"></i>'.repeat(rating);
        HTML += '<i class="fa fa-star-o"></i>'.repeat(maxStars - rating);

        return HTML;
    }

    generateItems() {
        let HTML = '';
        const itemWidth = 100 / (this.data.length + 2 * this.cloneCount);
        const dataCopy = [this.data[3], this.data[4], ...this.data, this.data[0], this.data[1]];

        for (let testimonial of dataCopy) {
            if (!this.isValidTestimonial(testimonial)) {
                continue;
            }

            HTML += `<div class="item" style="width: ${itemWidth}%;">
                        <img class="avatar" src="./img/testimonials/avatar-2.png" alt="${testimonial.name} testimonial image">
                        <div class="name">${testimonial.name}</div>
                        <div class="location">${testimonial.location}</div>
                        <div class="stars">
                            ${this.generateStars(testimonial.rating)}
                        </div>
                        <p class="description">${testimonial.comment}</p>
                    </div>`;
        }
        return HTML;
    }

    generateControls() {
        let HTML = '';

        if (!this.isArrowControlsVisible && !this.isDotControlsVisible) {
            return HTML;
        }

        const testimonialsCount = this.data.length;
        let dotsHTML = '<div class="dot active"></div>';
        dotsHTML += '<div class="dot"></div>'.repeat(testimonialsCount - 1);

        HTML = `<div class="controls">
                    ${this.isArrowControlsVisible ? '<i class="fa fa-angle-left"></i>' : ''}
                    ${this.isDotControlsVisible ? dotsHTML : ''}
                    ${this.isArrowControlsVisible ? '<i class="fa fa-angle-right"></i>' : ''}
                </div>`;

        return HTML;
    }

    render() {
        const listWidth = (this.data.length + 2 * this.cloneCount) * 100;

        const HTML = `<div class="testimonial">
                        <div class="view">
                            <div class="list" style="width: ${listWidth}%; margin-left: -${this.cloneCount}00%;">
                                ${this.generateItems()}
                            </div>
                        </div>
                        ${this.generateControls()}
                    </div>`;

        this.DOM.innerHTML = HTML;

        this.listDOM = this.DOM.querySelector('.list');

        if (this.isArrowControlsVisible || this.isDotControlsVisible) {
            this.controlsDOM = this.DOM.querySelector('.controls');

            if (this.isDotControlsVisible) {
                this.dotsDOMs = this.controlsDOM.querySelectorAll('.dot');
            }
        }
    }

    addEvents() {
        for (let i = 0; i < this.dotsDOMs.length; i++) {
            const dot = this.dotsDOMs[i];

            dot.addEventListener('click', () => {
                this.listDOM.style.marginLeft = -100 * i + '%';

                this.dotsDOMs[this.activeDotIndex].classList.remove('active');
                this.activeDotIndex = i;

                dot.classList.add('active');
            })
        }
    }
}

export { Testimonials }