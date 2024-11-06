import store from '@/store'
import ru from '@/languages/ru.json'
import en from '@/languages/en.json'

const locales = {
    'ru': ru,
    'en': en
}

export default function localizeFilter(key) {
    const locale = store.getters.locale || 'en'
    return locales[locale][key] || `[localize ERROR]: key "${key}"not found `
}