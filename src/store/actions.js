export default {
  TOKEN(context, option) {
    context.commit("toKen", option)
  },
  LANG(context, option) {
    context.commit("lang", option)
  },
  ISLOADING(context, option) {
    context.commit("isloading", option)
  }
}