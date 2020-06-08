import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh_cn from './locales/zh_cn'
import en from './locales/en'
import store from './../store'


Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: store.state.lang,
  messages: {
    zh_cn: zh_cn,
    en: en
  }
})

export default i18n
