import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: localStorage.getItem('i18nextLng')
      ? localStorage.getItem('i18nextLng')
      : 'en',
    lng: localStorage.getItem('i18nextLng')
      ? localStorage.getItem('i18nextLng')
      : 'en',
    resources: {
      en: {
        translations: require('./en.json')
      },
      ar: {
        translations: require('./ar.json')
      }
    },
    ns: ['translations'],
    defaultNS: 'translations'
  })

i18n.languages = ['en', 'ar']

export default i18n
