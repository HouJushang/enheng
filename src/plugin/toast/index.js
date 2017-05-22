/**
 * Created by hou on 2017/5/2.
 */
import Vue from 'vue'
import toastVue from './src/toast.vue'
const ToastConstructor = Vue.extend(toastVue)
const instance = new ToastConstructor({
  el: document.createElement('div')
})

document.body.appendChild(instance.$el)

function toast (data) {
  instance.content = data.content
  instance.isShow = true
  setTimeout(() => {
    instance.isShow = false
  }, data.time || 1500)
}
export default toast
