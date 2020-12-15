import { Validator } from '../validator/Validator.js';

function isValidLink(link, name) {
    if (!Validator.isHref(link)) {
        return false;
    }
    if (!Validator.isTitle(name)) {
        return false;
    }

    return true;
}

export { isValidLink }