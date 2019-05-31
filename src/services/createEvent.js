import firebase from 'firebase'

var db = firebase.firestore();

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
export const listEvent = async () => {

  await firebase.firestore().collection('events').get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      return doc.data
    })
  })
}
