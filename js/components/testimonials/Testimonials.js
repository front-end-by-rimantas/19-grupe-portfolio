class Testimonials {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;
        this.isArrowControlsVisible = params.isArrowControlsVisible;
        this.isDotControlsVisible = params.isDotControlsVisible;
        this.maxItems = params.maxItems;
        this.cloneCount = params.cloneCount;
        this.visibilityStrategy = params.visibilityStrategy;

        console.log(this);
    }

    isValidSelector() {
        return true;
    }

    render() {
        if (!this.isValidSelector()) {
            return;
        }

        const HTML = `<div class="testimonial">
                        <div class="view">
                            <div class="list">
                                <div class="item">
                                    <img class="avatar" src="./img/testimonials/avatar-2.png" alt="Jassica Williams testimonial image">
                                    <div class="name">Jassica Williams</div>
                                    <div class="location">Los Angeles, California</div>
                                    <div class="stars">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-o"></i>
                                    </div>
                                    <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, nisi soluta. Animi architecto commodi necessitatibus, quisquam cupiditate optio cumque a, perferendis aperiam nisi perspiciatis dignissimos, sed non? Corporis, nisi ratione.</p>
                                </div>
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

        const DOM = document.querySelector(this.selector);
        DOM.innerHTML = HTML;
    }
}

export { Testimonials }