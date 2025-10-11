import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationEN from './locales/en.json';
import translationNL from './locales/nl.json';
import translationAR from './locales/ar.json';

// Resources object
const resources = {
  en: {
    translation: translationEN
  },
  nl: {
    translation: translationNL
  },
  ar: {
    translation: translationAR
  }
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false // React already escapes
    },
    
    detection: {
      // Order and from where user language should be detected
      order: ['localStorage', 'navigator'],
      // Keys or params to lookup language from
      lookupLocalStorage: 'preferredLanguage',
      // Cache user language on
      caches: ['localStorage'],
    }
  });

export default i18n;

