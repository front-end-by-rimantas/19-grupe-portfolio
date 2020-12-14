function isValidFeature(feature) {
    if (typeof feature !== 'object' ||
        feature === null ||
        feature === undefined) {
        // console.error('ERROR: ...');
        return false;
    }
    if (typeof feature.img !== 'string') {
        // console.error('ERROR: ...');
        return false;
    }
    if (feature.img.length < 5) {
        // console.error('ERROR: ...');
        return false;
    }
    if (feature.img.length > 100) {
        // console.error('ERROR: ...');
        return false;
    }
    if (typeof feature.title !== 'string') {
        // console.error('ERROR: ...');
        return false;
    }
    if (typeof feature.description !== 'string') {
        // console.error('ERROR: ...');
        return false;
    }

    return true;
}

export { isValidFeature }