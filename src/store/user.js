import firebase from 'firebase'

export default {
  namespaced: true,
  state: {
    authenticated: true
  },
  mutations: {
    AUTHENTICATE_USER (state, payload) {
      state.authenticated = payload
    }
  },
  getters: {
    userAuthenticated: (state) => state.authenticated
  },
  actions: {
    userLogoff (context) {
      context.commit('AUTHENTICATE_USER', false)
    },
    async handleLoginWithEmailAndPassword (context, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        context.commit('AUTHENTICATE_USER', true)
        return { success: { message: 'Login efetuado com sucesso!' } }
      } catch (error) {
        console.log('Error on signInWithEmailAndPassword => ', error)
        switch (error.code) {
          case 'auth/invalid-email':
            error.message = 'O endereço de email é inválido!'
            break
          case 'auth/wrong-password':
            error.message = 'Email ou senha inválido!'
        }
        return { error }
      }
    }
  }
}
