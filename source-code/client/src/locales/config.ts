export type LocaleDirection = "ltr" | "rtl";

export type LocaleMeta = {
  code: string;
  name: string;
  nativeName: string;
  dir: LocaleDirection;
  experimental?: boolean;
  translationCode?: string;
};

export const LANGUAGE_STORAGE_KEY = "baldontlie-language";

export const localeCatalog: LocaleMeta[] = [
  { code: "en", name: "English", nativeName: "English", dir: "ltr", translationCode: "en" },
  { code: "ar", name: "Arabic", nativeName: "العربية", dir: "rtl", translationCode: "ar" },
  { code: "fr", name: "French", nativeName: "Français", dir: "ltr", translationCode: "fr" },
  { code: "pt", name: "Portuguese", nativeName: "Português", dir: "ltr", translationCode: "pt" },
  { code: "es", name: "Spanish", nativeName: "Español", dir: "ltr", translationCode: "es" },
  { code: "ja", name: "Japanese", nativeName: "日本語", dir: "ltr", translationCode: "ja" },
  { code: "yo", name: "Yoruba", nativeName: "Yorùbá", dir: "ltr", translationCode: "yo" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", dir: "ltr", translationCode: "hi" },
  { code: "zh-CN", name: "Simplified Chinese", nativeName: "简体中文", dir: "ltr", translationCode: "zh-CN" },
  { code: "ig", name: "Igbo", nativeName: "Igbo", dir: "ltr", translationCode: "ig" },
  { code: "sw", name: "Swahili", nativeName: "Kiswahili", dir: "ltr", translationCode: "sw" },
  { code: "la", name: "Latin", nativeName: "Latina", dir: "ltr", translationCode: "la", experimental: true },
  { code: "nl", name: "Dutch", nativeName: "Nederlands", dir: "ltr", translationCode: "nl" },
  { code: "jam", name: "Jamaican Patois", nativeName: "Jumiekan Patwa", dir: "ltr", translationCode: "en", experimental: true },
  { code: "ko", name: "Korean", nativeName: "한국어", dir: "ltr", translationCode: "ko" },
  { code: "zu", name: "Zulu", nativeName: "isiZulu", dir: "ltr", translationCode: "zu" },
  { code: "ha", name: "Hausa", nativeName: "Hausa", dir: "ltr", translationCode: "ha" },
  { code: "am", name: "Amharic", nativeName: "አማርኛ", dir: "ltr", translationCode: "am" },
  { code: "it", name: "Italian", nativeName: "Italiano", dir: "ltr", translationCode: "it" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe", dir: "ltr", translationCode: "tr" },
  { code: "he", name: "Hebrew", nativeName: "עברית", dir: "rtl", translationCode: "he" },
  { code: "de", name: "German", nativeName: "Deutsch", dir: "ltr", translationCode: "de" },
  { code: "ru", name: "Russian", nativeName: "Русский", dir: "ltr", translationCode: "ru" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", dir: "ltr", translationCode: "id" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", dir: "ltr", translationCode: "bn" },
];

export const fallbackLocale = "en";

export const rtlLocales = new Set(
  localeCatalog.filter((locale) => locale.dir === "rtl").map((locale) => locale.code),
);

export function getLocaleMeta(code?: string | null) {
  if (!code) return localeCatalog[0];

  return (
    localeCatalog.find((locale) => locale.code === code) ??
    localeCatalog.find((locale) => locale.translationCode === code) ??
    localeCatalog[0]
  );
}

export function isRtlLocale(code?: string | null) {
  if (!code) return false;
  return rtlLocales.has(code);
}

