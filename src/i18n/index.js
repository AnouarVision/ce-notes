import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import it from "./it.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      it: { translation: it },
    },
    lng: localStorage.getItem("lang") || "it",
    fallbackLng: "it",
    interpolation: {
      escapeValue: false,
    },
    react: {
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'em', 'code'],
    },
  });

export default i18n;