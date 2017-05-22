/**
 * Created by hou on 2017/5/2.
 */
import Vue from 'vue'
import loading from './src/loading.vue'
const LoadingConstructor = Vue.extend(loading)
const instance = new LoadingConstructor({
  el: document.createElement('div')
})

document.body.appendChild(instance.$el)

function startLoading (data) {
  instance.isShow = true
}

function endLoading (data) {
  instance.isShow = false
}
export {
  startLoading, endLoading
}
