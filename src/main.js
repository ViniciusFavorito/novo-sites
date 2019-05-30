import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import firebase from 'firebase'
import { firebaseConfig } from './../credentials'
import 'vue-awesome/icons'

import TemplateDefault from './components/Template'
import TemplateDashboard from './components/TemplateDashBoard'
import Loader from 'vue-spinner/src/RingLoader'
import Icon from 'vue-awesome/components/Icon'
import Notifications from 'vue-notification'

firebase.initializeApp(firebaseConfig)

Vue.component('TemplateDefault', TemplateDefault)
Vue.component('TemplateDashboard', TemplateDashboard)
Vue.component('Loader', Loader)
Vue.component('v-icon', Icon)

Vue.use(Notifications)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
