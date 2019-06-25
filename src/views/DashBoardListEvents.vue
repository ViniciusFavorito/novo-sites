<template>
  <div>
    <div id='container' class='flex-column'>
      <div class='title'>
        <h1>
          Eventos
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
import { listEvents } from '../services/createEvent'

export default {
  data () {
    return {
      events: {}
    }
  },
  methods: {
    getEvents: async function () {
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

</style>
