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

        this.init();
    }

    init() {
        // TODO: input (params) validation
        // TODO: blogiems reikia priskirti default reiksmes

        if (!this.isValidSelector()) {
            return;
        }
        this.render();
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
        for (let testimonial of this.data) {
            if (!this.isValidTestimonial(testimonial)) {
                continue;
            }

            console.log(testimonial);

            HTML += `<div class="item" style="width: 20%;">
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

    render() {
        const HTML = `<div class="testimonial">
                        <div class="view">
                            <div class="list" style="width: 500%;">
                                ${this.generateItems()}
                            </div>
                        </div>
                        <div class="controls">
                            <i class="fa fa-angle-left"></i>
                            <div class="dot active"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <i class="fa fa-angle-right"></i>
                        </div>
                    </div>`;

        this.DOM.innerHTML = HTML;
    }
}

export { Testimonials }