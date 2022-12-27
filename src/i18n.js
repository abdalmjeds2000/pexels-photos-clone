import i18next from "i18next";
import { initReactI18next } from 'react-i18next'
import LanguageDetector from "i18next-browser-languagedetector";


i18next
.use(initReactI18next)
.use(LanguageDetector)
.init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        // hero: "The best free stock photos, royalty free images shared by creators."
        nextBtn: "Next",
        prevBtn: "Previous"
      }
    },
    ar: {
      translation: {
        hero: "أفضل الصور المجانية ، الصور المجانية الملوك التي يشاركها المبدعون.",
        nextBtn: "التالي",
        prevBtn: "السابق",
      }
    },
    es: {
      translation: {
        hero: "Las mejores fotos de stock gratuitas, imágenes libres de regalías compartidas por los creadores.",
        nextBtn: "Próximo",
        prevBtn: "Previo",
      }
    },
    fr: {
      translation: {
        hero: "Les meilleures photos gratuites, images libres de droits partagées par les créateurs.",
        nextBtn: "Suivant",
        prevBtn: "précédent",
      }
    },
    in: {
      translation: {
        hero: "रचनाकारों द्वारा साझा की गई सर्वश्रेष्ठ मुफ्त स्टॉक तस्वीरें, रॉयल्टी मुक्त छवियां।",
        nextBtn: "अगला",
        prevBtn: "पहले का",
      }
    }
  }
})