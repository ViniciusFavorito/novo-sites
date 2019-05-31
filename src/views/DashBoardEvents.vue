<template>
  <div>
    <div id='container'class='flex-column'>
      <div class='title'>
        <h1>
          Criar/Editar Eventos
        </h1>
      </div>
      <form id='evento' name='evento'>
      <div id="input-container" class="flex-column">
      <label> Selecione a data do Evento</label>

        <date-picker class='' v-model="time2" type="datetime" :time-picker-options="timePickerOptions"></date-picker>

        <md-field>
          <label>Título do Evento</label>
          <md-input v-model="type"></md-input>
        </md-field>
        <md-field>
          <label>Descrição do Evento</label>
          <md-textarea v-model="textarea"></md-textarea>
        </md-field>
      </div>
      <div class="button-login" @click="!loading && defaultLogin()">
        <Loader :loading="loading" color="#FFFFFF" size="31px" margin="2px 20px"></Loader>
        <span v-if="!loading">Gravar</span>
      </div>
      </form>
    </div>
  </div>
</template>
<script>

import { mapActions } from 'vuex'
import DatePicker from 'vue2-datepicker'

export default {

    components: { DatePicker },
  data() {
    return {
      time1: '',
      time2: '',
      time3: '',
      loading: false,
      // custom lang
      lang: {
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        pickers: ['next 7 days', 'next 30 days', 'previous 7 days', 'previous 30 days'],
        placeholder: {
          date: 'Select Date',
          dateRange: 'Select Date Range'
        }
      },
      // custom range shortcuts
      shortcuts: [
        {
          text: 'Today',
          onClick: () => {
            this.time3 = [ new Date(), new Date() ]
          }
        }
      ],
      timePickerOptions:{
        start: '00:00',
        step: '00:30',
        end: '23:30'
      }
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
  margin-bottom: 32px;
  margin-left: 55px;
  background-color: #1f2b5f;
  color: white;
  font-size: 26px;
  padding: 10px 30px;
  text-align: left;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.25);
}
.button-login:active {
  background-color: #1f2b5f;
}


</style>