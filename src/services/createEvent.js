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
  docs.forEach((doc) => {
    const data = doc.data()
    events.push({ ...data, id: doc.id })
  })
  return events
}

export const deleteEvent = async ({ id }) => {
  try {
    const event = await firebase.firestore().collection('events').doc(id)
    event.delete()
  }catch (e) {
    console.log('error =>', e)
  }
}

export const listEvent = async ( id ) => {
  try {
    const event = await firebase.firestore().collection('events').doc(id).get()
    console.log(event)
    const data = event.data()
    return {...data, id:event.id}
  }catch (e) {
    console.log('error =>', e)
  }
}

export const editEvent = async ({ title, desc, date, id }) => {
  try {
    console.log(title, desc, date, id)
    const event = await firebase.firestore().collection('events').doc(id)
    await event.update({ title, desc, date })
  } catch (e) {
    console.log('error =>', e)
  }
}
