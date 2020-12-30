class Testimonial {
    constructor(data) {
        this.data = data;
    }

    isValid() {
        return true;
    }

    generateHTML() {
        return `<div class="testimonial">
                    <img class="avatar" src="./img/testimonials/avatar-2.png" alt="${this.data.name} testimonial image">
                    <div class="name">${this.data.name}</div>
                    <div class="location">${this.data.location}</div>
                    <div class="stars">
                        ${this.generateStars(this.data.rating)}
                    </div>
                    <p class="description">${this.data.comment}</p>
                </div>`;
    }

    generateStars(rating) {
        const maxStars = 5;
        let HTML = '<i class="fa fa-star"></i>'.repeat(rating);
        HTML += '<i class="fa fa-star-o"></i>'.repeat(maxStars - rating);

        return HTML;
    }
}

export { Testimonial }