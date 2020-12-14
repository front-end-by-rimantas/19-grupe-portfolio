/**
 * Navigacijos generavimas
 * @param {string} selector CSS like selector, kaip rasti norima vieta komponento generavimui
 * @param {Array} data duomenys
 */
function renderHeader(selector, data) {
    // input validation

    // logic
    const DOM = document.querySelector(selector);
    if (!DOM) {
        return false;
    }

    let HTML = '';

    for (let { link, name } of data) {
        HTML += `<a href="${link}">${name}</a>`;
    }

    // post logic validation
    if (HTML === '') {
        return false;
    }

    // return
    DOM.innerHTML = HTML;
    return true;
}

export { renderHeader }