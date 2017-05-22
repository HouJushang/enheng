/**
 * Created by hou on 2017/4/13.
 */
import Vue from 'vue'
import config from '../config'
function request (type, data) {
  Vue.startLoading()
  Vue.http.options.emulateJSON = true
  let requestUrl = config.baseUrl + data.url
  let requestParam = {
    headers: {
      token: sessionStorage.getItem('access_token') || ''
    }
  }
  if (type === 'get') {
    requestParam.params = data.data || {}
  }
  if (type === 'delete') {
    requestParam.body = data.data || {}
  }
  return new Promise((resolve, reject) => {
    if (type === 'get' || type === 'delete') {
      Vue.http[type](requestUrl, requestParam)
        .then(response => {
          let responseData = response.body
          if (responseData.code === 1000000) {
            resolve(responseData.data)
            Vue.endLoading()
          } else {
            Vue.toast({
              content: 'responseData.message',
              time: 1500
            })
            Vue.endLoading()
          }
        }, error => {
          console.log(error)
          Vue.endLoading()
        })
    }
    if (type === 'post' || type === 'put') {
      Vue.http[type](
        config.baseUrl + data.url,
        data.data || {},
        {
          headers: {
            token: sessionStorage.getItem('access_token') || ''
          }
        }).then(response => {
          let responseData = response.body
          if (responseData.code === 1000000) {
            resolve(responseData.data)
            Vue.endLoading()
          } else {
            Vue.toast({
              content: responseData.message,
              time: 1500
            })
            Vue.endLoading()
          }
        }, error => {
          console.log(error)
          Vue.endLoading()
        })
    }
  })
}
function getRequest (data) {
  return request('get', data)
}
function deleteRequest (data) {
  return request('delete', data)
}
function putRequest (data) {
  return request('put', data)
}
function postRequest (data) {
  return request('post', data)
}

export {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest
}
