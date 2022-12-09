import enUS from './en-US'
import koKR from './ko-KR'
import elementEnLocale from 'element-plus/es/locale/lang/en'
import elementKoLocale from 'element-plus/es/locale/lang/ko'

const messages = {
  'ko-KR': {
    ...koKR,
    ...elementKoLocale
  },
  'en-US': {
    ...enUS,
    ...elementEnLocale
  },

}

export function getLocalLanguage() {
  if (process.env.CLIENT) {
    if (navigator) {
      return (navigator.language || navigator.browserLanguage);
    }
  }

  return 'ko-KR'
}

export function getLanguage() {
  const language = getLocalLanguage()

  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'ko-KR'
}

export default messages;
