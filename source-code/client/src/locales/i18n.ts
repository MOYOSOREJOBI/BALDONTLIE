import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { fallbackLocale, getLocaleMeta, isRtlLocale, LANGUAGE_STORAGE_KEY, localeCatalog } from "@/locales/config";
import { resources } from "@/locales/resources";

function getInitialLanguage() {
  if (typeof window === "undefined") {
    return fallbackLocale;
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  const htmlLanguage = document.documentElement.lang;
  const browserLanguage = navigator.language;

  return (
    getLocaleMeta(storedLanguage).code ||
    getLocaleMeta(htmlLanguage).code ||
    getLocaleMeta(browserLanguage).code ||
    fallbackLocale
  );
}

function applyDocumentDirection(lng: string) {
  if (typeof document === "undefined") return;
  const dir = isRtlLocale(lng) ? "rtl" : "ltr";
  document.documentElement.dir = dir;
  document.documentElement.lang = lng;
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: fallbackLocale,
    supportedLngs: localeCatalog.map((locale) => locale.code),
    keySeparator: false,
    nsSeparator: false,
    returnNull: false,
    interpolation: {
      escapeValue: false,
    },
  });

// Apply direction whenever language changes
i18n.on("languageChanged", (lng) => {
  applyDocumentDirection(lng);
  if (typeof window !== "undefined") {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lng);
  }
});

// Apply direction for the initial language
applyDocumentDirection(i18n.language || fallbackLocale);

export default i18n;

