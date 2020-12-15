import { Validator } from '../validator/Validator.js';

function isValidFeature(feature) {
    if (!Validator.isObject(feature)) {
        return false;
    }
    if (!Validator.isImageFile(feature.img)) {
        return false;
    }
    if (!Validator.isTitle(feature.title)) {
        return false;
    }
    if (!Validator.isDescription(feature.description)) {
        return false;
    }

    return true;
}

export { isValidFeature }