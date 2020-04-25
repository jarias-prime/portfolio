import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import './quasar'
import store from './store'

// Import Firebase Configuration
import '@/components/firebaseConfig'
import {
  firestorePlugin
} from 'vuefire'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  firestorePlugin,
  render: (h) => h(App)
}).$mount('#app')
