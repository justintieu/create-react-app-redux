import i18n from "i18next";
import XHR from "i18next-xhr-backend";
// import Cache from 'i18next-localstorage-cache';
// import LanguageDetector from 'i18next-browser-languagedetector';

const LOAD_PATH = process.env.PUBLIC_URL + "/locales/{{lng}}/{{ns}}.json";

i18n.use(XHR)
    // .use(Cache)
    //.use(LanguageDetector) /* Not serving multiple languages currently */
    .init({
        lng: "en-US",

        backend: {
            loadPath: LOAD_PATH
        },

        ns: ["resource"],
        defaultNS: "resource",
        fallbackNS: "resource",

        whitelist: ["en-US"],
        fallbackLng: false,
        load: "currentOnly",

        debug: process.env.NODE_ENV === "production" ? false : true,

        // cache: {
        //   enabled: true
        // },

        appendNamespaceToMissingKey: true,

        interpolation: {
            escapeValue: false /* not needed for react */,
            formatSeparator: ",",
            format: function(value, format, lng) {
                switch (format) {
                    case "uppercase":
                        return value.toUpperCase();
                    default:
                        return value;
                }
            }
        }
    });

export default i18n;
