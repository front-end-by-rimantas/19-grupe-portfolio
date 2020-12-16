import { Validator } from '../validator/Validator.js';

function isValidInput(selector, headerData) {
    if (!Validator.isSelector(selector) ||
        !Validator.isArray(headerData)) {
        return false;
    }

    return true;
}

export { isValidInput }