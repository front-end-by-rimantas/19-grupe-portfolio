import { isValidInput } from './isValidInput.js';
import { isValidFeature } from './isValidFeature.js';
import { translate } from '../translator/translate.js';

/**
 * Premium Features sekcija generuojanti funkcija
 * @param {string} selector CSS like salyga, kaip rasti norima vieta turinio generavimui
 * @param {Array} data Sarasas objektu aprassanciu kiekviena Premium Feature
 * @returns {*}
 */
function renderPremiumFeatures(selector, featuresData) {
    // input validation
    if (!isValidInput(selector, featuresData)) {
        return false;
    }

    // logic
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: could not find an elements by a given selector.');
        return false;
    }

    let HTML = '';
    const count = featuresData.maxLimit || featuresData.data.length;

    for (let i = 0; i < count; i++) {
        const feature = featuresData.data[i];
        if (!isValidFeature(feature)) {
            continue;
        }

        HTML += `<div class="col-4 col-sm-6 col-xs-12">
                    <div class="block">
                        <img src="./img/${featuresData.imgFolder}/${feature.img}" alt="Premium feature &quot;${feature.title}&quot; image">
                        <h3>${translate(feature.title)}</h3>
                        <p>${feature.description}</p>
                    </div>
                </div>`;
    }


    // post logic validation
    if (HTML === '') {
        console.error('ERROR: given data object does not contain valid data.');
        return false;
    }

    // return
    DOM.innerHTML = HTML;
    return true;
}

export { renderPremiumFeatures }