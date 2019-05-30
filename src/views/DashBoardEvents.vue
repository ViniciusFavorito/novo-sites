<template>
  <div>
    <div id='container'class='flex-column'>
      <div class='title'>
        <h1>
          Criar/Editar Eventos
        </h1>
      </div>
      <div id="input-container" class="flex-column">
        <label>
          <input v-model="titulo" type="text" class="input" placeholder="Titulo">
        </label>
        <md-field>
          <label>Descrição do Evento</label>
          <md-textarea v-model="textarea"></md-textarea>
        </md-field>
      </div>
      <div class="button-login">
        <Loader :loading="loading" color="#FFFFFF" size="31px" margin="2px 20px"></Loader>
        <span v-if="!loading">Gravar</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {

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

  .title{
    padding: 50px;
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
  margin-left: 65px;
  background-color: #1f2b5f;
  color: white;
  font-size: 26px;
  padding: 16px 80px;
  border-radius: 10px;
  cursor: pointer;
  width: 210px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.25);
}
.button-login:active {
  background-color: #1f2b5f;
}


</style>