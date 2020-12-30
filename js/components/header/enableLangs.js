function enableLangs() {
    const selector = 'header .lang-switch';
    const DOM = document.querySelector(selector);
    const langs = DOM.querySelectorAll('.lang');

    const defaultLanguage = 'lt';
    const selectedLanguage = localStorage.getItem('portfolio-lang') || defaultLanguage;

    DOM.querySelector(`.lang[data-lang="${selectedLanguage}"]`).classList.add('active');

    for (const langDOM of langs) {
        langDOM.addEventListener('click', () => {
            const langValue = langDOM.innerText.toLowerCase();
            localStorage.setItem('portfolio-lang', langValue);
            location.reload();
        })
    }
}

export { enableLangs }