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
        prevBtn: "Previous",
        searchResultTitle: "Result for search about",
        searchInputPlaceholder: "Search for free photos",
        homeImagesSectionTitle: "Free Stock Photos"
      }
    },
    ar: {
      translation: {
        hero: "أفضل الصور المجانية ، الصور المجانية الملوك التي يشاركها المبدعون.",
        nextBtn: "التالي",
        prevBtn: "السابق",
        searchResultTitle: "نتيجة البحث عن",
        searchInputPlaceholder: "ابحث عن صور مجانية",
        homeImagesSectionTitle: "صور فوتوغرافية مجانية"
      }
    },
    es: {
      translation: {
        hero: "Las mejores fotos de stock gratuitas, imágenes libres de regalías compartidas por los creadores.",
        nextBtn: "Próximo",
        prevBtn: "Previo",
        searchResultTitle: "Resultado de la búsqueda sobre",
        searchInputPlaceholder: "Buscar fotos gratis",
        homeImagesSectionTitle: "Fotografías de stock gratuitas"
      }
    },
    fr: {
      translation: {
        hero: "Les meilleures photos gratuites, images libres de droits partagées par les créateurs.",
        nextBtn: "Suivant",
        prevBtn: "précédent",
        searchResultTitle: "Résultat de la recherche sur",
        searchInputPlaceholder: "Rechercher des photos gratuites",
        homeImagesSectionTitle: "Photos gratuites"
      }
    }
  }
})