export default {
  namespaced: true,
  state: {
    authenticated: true,
    name: 'Erick'
  },
  mutations: {
    AUTHENTICATE_USER (state, payload) {
      state.authenticated = payload
    }
  },
  actions: {
    userLogin (context) {
      context.commit('AUTHENTICATE_USER', true)
    },
    userLogoff (context) {
      context.commit('AUTHENTICATE_USER', false)
    }
  }
}
