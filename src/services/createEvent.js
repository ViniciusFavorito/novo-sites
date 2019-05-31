import firebase from 'firebase'

export const createEvent = async ({ title, desc, date }) => {
  try {
    await firebase.firestore().collection('events').add({
      title,
      desc,
      date
    })
  } catch (e) {
    console.log('error =>', e)
  }
}
