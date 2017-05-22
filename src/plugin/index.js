/**
 * Created by hou on 2017/5/2.
 */
import confirm from './confirm/index'
import {startLoading, endLoading} from './loading/index'
import toast from './toast/index'
let MyPlugin = {}

MyPlugin.install = function (Vue, options) {
  Vue.prototype.$confirm = confirm
  Vue.startLoading = Vue.prototype.$startLoading = startLoading
  Vue.endLoading = Vue.prototype.$endLoading = endLoading
  Vue.prototype.$toast = toast
  Vue.toast = toast
}
export default MyPlugin
