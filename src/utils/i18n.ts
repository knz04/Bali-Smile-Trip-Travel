import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "id"],
    debug: false,

    interpolation: {
      // React already escapes values, so we don't need i18next to do it too
      escapeValue: false,
    },

    backend: {
      // Served from /public/locales/{{lng}}/translation.json
      loadPath: "/locales/{{lng}}/translation.json",
    },

    detection: {
      // In-memory toggle, but remembered across reloads via localStorage
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "bali-smile-language",
    },

    react: {
      // Wait for translations to load before rendering (paired with <Suspense> in main.tsx)
      useSuspense: true,
    },
  });

export default i18n;
