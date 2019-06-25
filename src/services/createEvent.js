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

export const listEvents = async () => {
  console.log('listEvents')
  const { docs } = await firebase.firestore().collection('events').get()
  const events = []
  docs.forEach((doc) => events.push({...doc.data(), id:doc.id})
  return events
}

export const deleteEvent = async ( event ) => {
  try {
    await firebase.firestore().collection('events').onDelete({
      doc
    })
  } catch (e) {
    console.log('error =>', e)
  }
}
