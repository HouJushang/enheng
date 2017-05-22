/**
 * Created by hou on 2017/5/2.
 */
import Vue from 'vue'
import confirm from './src/confirm.vue'
const ConfirmConstructor = Vue.extend(confirm)
const instance = new ConfirmConstructor({
  el: document.createElement('div')
})

let confirmQueue = []
document.body.appendChild(instance.$el)

export default function (data) {
  confirmQueue.push(data)
  return showConfirm()
}

function showConfirm () {
  let data = confirmQueue[0]
  for (let prop in data) {
    instance[prop] = data[prop]
  }
  instance.isShow = true
  confirmQueue.shift()
  return new Promise((resolve, reject) => {
    instance.resolve = resolve
    instance.reject = reject
  })
}
