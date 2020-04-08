import Vue from 'vue'
import VueI18n from 'vue-i18n'
import api from '@/libs/api'
import zh_cn from './locales/zh_cn'
import en from './locales/en'


Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: api.LANG,
  messages: {
    zh_cn: zh_cn,
    en: en
  }
})

export default i18n
