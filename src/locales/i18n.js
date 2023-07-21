import { createI18n } from 'vue-i18n'
import en from './en.json'
import vi from './vi.json'

const getSavedLocale = () => {
    const savedLocale = localStorage.getItem('selectedLocale'); // Change 'localStorage' to 'sessionStorage' if you want to use sessionStorage instead
    return savedLocale || 'en'; // Return 'en' as the default locale if no saved locale is found
  };
const i18n = createI18n({
    legacy: false,
    locale: getSavedLocale(),
    messages: {
        en,
        vi
  }
})

export default i18n