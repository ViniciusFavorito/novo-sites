import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import firebase from 'firebase'
import { firebaseConfig } from './../credentials'

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
