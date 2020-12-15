import { isValidInput } from "./isValidInput.js";
import { isValidLink } from "./isValidLink.js";

/**
 * Navigacijos generavimas
 * @param {string} selector CSS like selector, kaip rasti norima vieta komponento generavimui
 * @param {Array} data duomenys
 */
function renderHeader(selector, data) {
    if (!isValidInput(selector, data)) {
        return false;
    }

    const DOM = document.querySelector(selector);
    if (!DOM) {
        return false;
    }

    let HTML = '';
    for (let { link, name } of data) {
        if (isValidLink(link, name)) {
            HTML += `<a href="${link}">${name}</a>`;
        }
    }

    if (HTML === '') {
        return false;
    }

    DOM.innerHTML = HTML;
    return true;
}

export { renderHeader }