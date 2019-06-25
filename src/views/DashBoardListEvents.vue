<template>
  <div>
    <div id='container' class='flex-column'>
      <div class='title' >
        <h1>
          Eventos
        </h1>

        <div id="events" style="margin-top:70px;">
        <table style="width:100%;" class='table'v-for="(event, id) in events" :key="id">
          <tbody>
            <ul style="font-size:30px; margin-left:60px; margin-top:40px;">{{ event.title }}
              <input @click='delEvent(event)' class='btn' type='button' value="Excluir">
              <router-link :to="`/dashboard/events/edit/${event.id}`"  class='btn'>Editar</router-link>
              <br>
              <br>
              </ul>
            <p style='margin-left:150px; font-size:20px; width:auto; margin-botton: 100px;'>{{ event.desc }}</p>
            </br>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  </div>
</template>
<script>

import { listEvents } from '../services/createEvent'
import { deleteEvent } from '../services/createEvent'

export default {
  data () {
    return {
      events: {}
    }
  },
  methods: {
    getEvents: async function () {
      this.events = await listEvents()
    },
    delEvent: async function (event) {
      await deleteEvent(event)
      this.events = await listEvents()
    }
  },
  mounted () {
    this.getEvents()
  }
}
</script>

<style scoped>

.flex-column {
  display: flex;
  flex-direction: column;
  padding: 50px;
}

#container {
  font-family: Arial, sans-serif;
  color: black;
  font-size: 16px;
  justify-content: center;
  background-color: white;
}

.table{
  border-bottom: 6px solid #1F2B50;
  background-color: white;
}

.btn{
  float: right;
  margin-left:50px;
  height: 45px;
  width: 70px;
  background-color: white;
  border-width: #1F2B50;
  border-style: #1F2B50;
}

</style>
