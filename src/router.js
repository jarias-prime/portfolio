import firebase from 'firebase'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'about',
    component: () => import('./views/About.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('./views/Projects.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('./views/Contact.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('./views/Dashboard.vue'),
    meta: {
      isAuthenticated: true
    },
    beforeEnter (to, from, next) {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          next()
        } else {
          next('/about')
        }
      })
    }
  }
  ]
})
