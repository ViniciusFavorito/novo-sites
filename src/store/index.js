import Vue from 'vue'
import Vuex from 'vuex'

import User from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    User
  },
  state: {
    useTemplate: true
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
