import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-xhr-backend";
import detector from "i18next-browser-languagedetector";
import translationEN from "./assets/i18n/translations/en.json";
import translationCH from "./assets/i18n/translations/ch.json";

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  ch: {
    translation: translationCH
  }
};
const options = {
  // order and from where user language should be detected
  order: [
    "querystring",
    "cookie",
    "localStorage",
    "navigator",
    "htmlTag",
    "path",
    "subdomain"
  ],

  // keys or params to lookup language from
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: "myDomain",

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // only detect languages that are in the whitelist
  checkWhitelist: true
};

// i18n
// .use(detector)
// .use(backend)
// .use(initReactI18next)
// .init({
//   resources: resources,
//   fallbackLng: 'en',
//   // debug only when not in production
//   debug: true,
//   ns: ['translations'],
//   defaultNS: 'translations',
//   keySeparator: false,
//   interpolation: {
//     escapeValue: false,
//     formatSeparator: ',',
//   },
//   react: {
//     wait: true,
//   },
// });
i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(detector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    // debug only when not in production
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      wait: true,
    },
  });
export default i18n;
