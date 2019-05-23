import firebase from 'firebase'
import store from './../store/index'

const signInWithEmailAndPassword = async ({ email, password }) => {
  console.log('here')
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password)
    const userLogin = store.getters['user/userLogin']
    userLogin()
    console.log('Login success!')
  } catch (e) {
    console.log('Error on signInWithEmailAndPasword => ', e)
    return e
  }
}
export default {
  signInWithEmailAndPassword
}
