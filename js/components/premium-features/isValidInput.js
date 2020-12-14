function isValidInput(selector, featuresData) {
    if (typeof selector !== 'string') {
        // console.error('ERROR: premium features selector has to be a string type.');
        return false;
    }
    if (typeof featuresData !== 'object' ||
        Array.isArray(featuresData) ||
        featuresData === null) {
        // console.error('ERROR: premium features data has to be an array type.');
        return false;
    }
    if (!Array.isArray(featuresData.data)) {
        // console.error('ERROR: premium features data has to be an array type.');
        return false;
    }

    return true;
}

export { isValidInput }