// 去除前后空格
const trim = str => str.replace(/(^\s*)|(\s*$)/g, "")

// 去除所有空格
const trimAll = str => str.replace(/\s/g,"")

// 手机号中间 4 位数 * 号
const privacyPhone = value => String(value).replace(/^(\d{3})\d*(\d{4})$/,'$1****$2')

// 判空
const isFalse = value => {
  if (value == '' || value == undefined || value == null || value == 'null' || value == 'undefined' || value == 0 || value == false || value == NaN) return true
  return false
}

export default {
  install(Vue) {
    // Vue.prototype.$trim = trim
    // Vue.prototype.$trimAll = trimAll
    // Vue.prototype.$privacyPhone = privacyPhone
  }
}
