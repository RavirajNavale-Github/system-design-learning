import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) //automatically detect the user's language
  .use(initReactI18next) //enable integration with React.
  .init({
    debug: true, //Give all error in console
    lng: "en",
    resources: {
      en: {
        translation: {
          greeting: "Hello World",
        },
      },
      fr: {
        translation: {
          greeting: "Bonjour le monde",
        },
      },
      hi: {
        translation: {
          greeting: "नमस्ते दुनिया",
        },
      },
    },
  });
