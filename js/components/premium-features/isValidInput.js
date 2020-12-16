import { Validator } from '../validator/Validator.js';

function isValidInput(selector, featuresData) {
    if (!Validator.isSelector(selector)) {
        return false;
    }
    if (!Validator.isObject(featuresData)) {
        return false;
    }
    if (!Validator.isArray(featuresData.data)) {
        return false;
    }

    return true;
}

export { isValidInput }