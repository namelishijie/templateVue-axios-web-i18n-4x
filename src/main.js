import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import service from './service'
import tools from './libs/tools'
import 'normalize.css/normalize.css'
import './libs/vaildate'

const GETI18N = str => i18n.messages[store.getters.lang][str.match(/(\S*)\./)[1]][str.match(/\.(\S*)/)[1]]
Vue.use(service).use(tools)

Vue.config.productionTip = false

Vue.prototype.$lang = lang => {
  store.dispatch("lang", lang)
  i18n.locale = lang
}

// router.beforeEach((to, from, next) => {
  // window.scrollTo(0,0);
  //登录拦截
  // if(to.meta.requireAuth) {
  //   if(store.state.toKen) {
  //     next()
  //   }else {
  //     next({
  //       path: '/', // 登录拦截跳转
  //       query: {redirect: to.fullPath}
  //     })
  //   }
  // }else {
  //   next()
  // }
// })

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
