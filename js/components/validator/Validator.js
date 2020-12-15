class Validator {
    static isSelector(text) {
        if (typeof text !== 'string' ||
            text === '') {
            return false;
        }
        return true;
    }

    static isArray(array) {
        if (!Array.isArray(array) ||
            array.length === 0) {
            return false;
        }
        return true;
    }

    static isObject(object) {
        if (typeof object !== 'object' ||
            Array.isArray(object) ||
            object === null) {
            return false;
        }
        return true;
    }

    static isImageFile(text) {
        const validExtension = ['png', 'jpg', 'gif', 'jpeg'];
        if (typeof text !== 'string' ||
            text.length < 5 ||
            text.length > 100 ||
            text[0] === '.' ||
            text[text.length - 1] === '.') {
            return false;
        }
        const parts = text.split('.');

        // isitikaname, jog tinkama galune
        if (parts.length !== 2) {
            return false;
        }
        if (!validExtension.includes(parts[1])) {
            return false;
        }

        // TODO: isitikiname, jog tinkamas pavadinimas

        return true;
    }

    static isHref(href) {
        if (typeof href !== 'string' ||
            href === '') {
            return false;
        }
        return true;
    }

    static isTitle(text) {
        if (typeof text !== 'string' ||
            text === '' ||
            text.length > 100) {
            return false;
        }

        // TODO: leidziami simboliai: raides, skaiciai, tarpas

        return true;
    }

    static isDescription(text) {
        if (typeof text !== 'string' ||
            text === '' ||
            text.length > 1000) {
            return false;
        }

        // TODO: leidziami simboliai: raides, skaiciai, tarpas, spec simboliai

        return true;
    }
}

export { Validator }