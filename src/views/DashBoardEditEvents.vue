<template>
  <div>
    <div id='container' class='flex-column'>
      <div class='title'>
        <h1>
          Criar/Editar Eventos
        </h1>
      </div>
      <form id='evento' name='evento'>
      <div id="input-container" class="flex-column">
      <!-- <label> Selecione a data do Evento</label> -->
        <!-- <date-picker class='' v-model="date" type="date" :lang="lang" :time-picker-options="timePickerOptions"></date-picker> -->
        <md-field>
          <label>Título do Evento</label>
          <md-input v-model="event.title"></md-input>
        </md-field>
        <md-field>
          <label>Descrição do Evento</label>
          <md-textarea v-model="event.desc"></md-textarea>
        </md-field>
      </div>
      <div class="button-login" @click="!loading && submitEvent()">
        <Loader :loading="loading" color="#FFFFFF" size="31px" margin="2px 20px"></Loader>
        <span v-if="!loading">Gravar</span>
      </div>
      </form>
    </div>
  </div>
</template>
<script>

// import DatePicker from 'vue2-datepicker'
import { listEvent, editEvent } from '../services/createEvent'
import { async } from 'q';
import { functions } from 'firebase';

export default {
  // components: { DatePicker },
  data () {
    return {
      event: {},
      loading: false
    }
  },
  mounted () {
    this.getEvent()
  },
  methods: {
    submitEvent: async function () {
      if (!this.loading) {
        this.loading = true
        const { id, desc, date, title } = this.event
        await editEvent({ id, desc, date, title })
        this.loading = false
      }
    },
    getEvent: async function () {
      this.event = await listEvent(this.$route.params.id)
    }
  }
}
</script>

<style scoped>

  .flex-column {
    display: flex;
    flex-direction: column;
    padding: 50px;
  }

  .event-form {
    align-items: center;
    background-color: white;
    padding: 64px;
    border-radius: 10px;
  }

  #container {
    font-family: Arial, sans-serif;
    color: black;
    font-size: 16px;
    justify-content: center;
    align-items: left;
    background-color: white;
  }


  .input {
  border: 0;
  border-bottom: 1px solid #C7C7C7;
  text-decoration: none;
  outline: none;
  min-width: 280px;
  margin-bottom: 32px;
  padding-bottom: 8px;
  padding-left: 8px;
  font-size: 16px;
  color: #4442A2;
}
.input::placeholder {
  color: #4442A2;
  font-size: 16px;
}
.button-login {
  background-color: #1f2b5f;
  color: white;
  font-size: 26px;
  text-align: center;
  margin: auto;
  width: max-content;
  padding: 15px 30px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.25);
}
.button-login:active {
  background-color: #1f2b5f;
}


</style>
