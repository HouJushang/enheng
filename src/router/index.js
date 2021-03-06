import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/indexPage.vue'
import Login from '../page/loginPage.vue'
import Register from '../page/registerPage.vue'
import Personal from '../page/personalPage.vue'
import nPersonal from '../page/npersonalPage.vue'
import About from '../page/aboutPage.vue'
import Contact from '../page/contact.vue'
import OpenAccount from '../page/openAccount.vue'
import BindAccount from '../page/bindAccount.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/openaccount',
      name: 'openAccount',
      component: OpenAccount
    },
    {
      path: '/bindaccount',
      name: 'bindAccount',
      component: BindAccount
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '/npersonal',
      name: 'npersonal',
      component: nPersonal
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
