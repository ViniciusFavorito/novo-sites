import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(Vuex)
Vue.use(VueMaterial)

export default new Vuex.Store({
  modules: {
    user
  },
  state: {
    useTemplate: 'default',
    dashBoardMenus: [
      { name: 'Inicio', icon: 'home', route: 'home' },
      { name: 'Eventos', icon: 'calendar-week', route: 'events' }
    ]
  },
  mutations: {
    CHANGE_USE_TEMPLATE (state, payload) {
      state.useTemplate = payload
    }
  },
  actions: {
    changeUseTemplate (context, option) {
      context.commit('CHANGE_USE_TEMPLATE', option)
    }
  }
})
