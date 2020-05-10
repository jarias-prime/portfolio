import firebase from 'firebase'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '*',
    component: () => import('./layouts/PageNotFound.vue')
  },
  {
    path: '/',
    name: 'arias',
    component: () => import('./layouts/Main.vue'),
    children: [{
      path: '',
      name: 'about',
      component: () => import('./views/main/About.vue')
    },
    {
      path: 'projects',
      name: 'projects',
      component: () => import('./views/main/Projects.vue')
    },
    {
      path: 'contact',
      name: 'contact',
      component: () => import('./views/main/Contact.vue')
    }] }, {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('./layouts/Dashboard.vue'),
    children: [{
      path: '',
      name: 'home',
      component: () => import('./views/admin/Home.vue'),
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
    },
    {
      path: 'sample',
      name: 'sample',
      component: () => import('./views/admin/Sample.vue')
    }]
  }],
  scrollBehavior () {
    return {
      x: 0,
      y: 0
    }
  }
})
