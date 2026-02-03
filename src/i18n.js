import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Asinxron resurs yuklash funksiyasi
async function loadResources() {
  const [en, uz, ru] = await Promise.all([
    fetch("/locales/en/translation.json").then(res => res.json()),
    fetch("/locales/uz/translation.json").then(res => res.json()),
    fetch("/locales/ru/translation.json").then(res => res.json())
  ]);

  return {
    en: { translation: en },
    uz: { translation: uz },
    ru: { translation: ru }
  };
}

// i18n iniatsializatsiyasi
export async function initI18n() {
  const resources = await loadResources();

  await i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: "uz",           // Default til
      fallbackLng: "en",   // Agar til topilmasa, en ishlatadi
      interpolation: {
        escapeValue: false // React da XSS dan himoya uchun kerak emas
      },
      react: {
        useSuspense: true // Suspense bilan ishlash
      }
    });

  return i18n;
}

// Fayl o‘zi import qilinganda avtomatik ishga tushadi
initI18n().catch(err => console.error("i18n init failed:", err));

export default i18n;
