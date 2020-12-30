function translate(key, lang) {
    const defaultLanguage = 'lt';
    const selectedLanguage = localStorage.getItem('portfolio-lang') || defaultLanguage;
    const langTranslateInto = lang || selectedLanguage;
    const dictionary = {
        'menu-home': {
            lt: 'Pradzia',
            en: 'Home'
        },
        'menu-features': {
            lt: 'Pranasumai',
            en: 'Feature'
        },
        'menu-pages': {
            lt: 'Puslapiai',
            en: 'Pages'
        },
        'menu-screenshots': {
            lt: 'Paveiksliukai',
            en: 'Screenshots'
        },
        'menu-pricing': {
            lt: 'Kainodara',
            en: 'Pricing'
        },
        'menu-contact': {
            lt: 'Kontaktai',
            en: 'Contact'
        },
        'feature-fully-func': {
            lt: 'Pilnai funkcionuojantis',
            en: 'Fully functional'
        },
        'feature-live-chat': {
            lt: 'Gyvas pokalbis',
            en: 'Live Chat'
        },
        'feature-secure-data': {
            lt: 'Saugus duomenys',
            en: 'Secure Data'
        },
    }

    if (!dictionary[key]) {
        return key;
    }

    return dictionary[key][langTranslateInto];
}

export { translate }