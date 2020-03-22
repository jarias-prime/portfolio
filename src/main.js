import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import './quasar'
import store from './store'

// Import Firebase Configuration
import '@/components/firebaseConfig'
import VueFire from 'vuefire'

// Global Component Registers
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import StartProjectDialog from '@/components/StartProjectDialog.vue'

// Use Vue Fire
// Vue.use(VueFire)

Vue.config.productionTip = false
Vue.component('CMPT-Header', Header)
Vue.component('CMPT-Footer', Footer)
Vue.component('CMPT-StartProjectDialog', StartProjectDialog)

new Vue({
  router,
  store,
  VueFire,
  render: (h) => h(App)
}).$mount('#app')
