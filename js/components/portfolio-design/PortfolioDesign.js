class PortfolioDesign {
    constructor(data) {
        this.data = data;
    }

    isValid() {
        return true;
    }

    generateHTML() {
        return `<div class="portfolio-design">
                    <img src="./img/portfolio/${this.data.img}" alt="${this.data.alt} portfolio design image">
                </div>`;
    }
}

export { PortfolioDesign }