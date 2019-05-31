import firebase from 'firebase'

const signInWithEmailAndPassword = async ({ email, password }) => {
  console.log('here')
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password)
    console.log('Login success!')
  } catch (e) {
    console.log('Error on signInWithEmailAndPasword => ', e)
    return e
  }
}
export default {
  signInWithEmailAndPassword
}
