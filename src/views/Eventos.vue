<template>
     
    <div id="container" class="flex-column">
    <div class="flex-column event-form">
      <div id="title-container" class="flex-column">
        <div id="title">Cronograma SITES XX</div>
      </div>
      <div class="sub-title "> 28/05/2019 - 19h </div>
        <div class='li-event'>
          <li v-for="i in events" class='li'>maratona</li>
          <li class='li'>maratona</li>
          <li class='li'>maratona</li>
          <li class='li'>maratona</li>

        </div>
      <div class="sub-title "> 29/05/2019 - 19h </div>
        <div class='li-event'>
          <li class='li'>maratona</li>
        
        </div>
      <div class="sub-title "> 30/05/2019 - 19h </div>
        <div class='li-event'>
          <li class='li'>maratona</li>
        </div>
      <div class="sub-title "> 31/05/2019 - 19h </div>
        <div class='li-event'>
          <li class='li'>maratona</li>
        </div>
        
      
      
    </div>
  </div>
</template>

<script>
import store from '../store'
import { mapActions } from 'vuex'
import Template from './../components/Template'
import Footer from './../components/Footer'
 
</script>


<style scoped>
.flex-column {
  display: flex;
  flex-direction: column;
}

#container {
  font-family: Arial, sans-serif;
  color: #4442A1;
  font-size: 16px;
  justify-content: left;
  align-items: left;
  background-color: white;
  width: 100vw;
  height: 100vh;
}

.event-form {
  align-items: left;
  background-color: white;
  padding:  4% ;
  border-radius: 10px;
}

#title {
  font-size: 32px;
  margin-bottom: 16px;
  margin-left: 50px;
}

.sub-title {
  font-size: 25px;
  margin-bottom: 16px;
  margin-left: 90px;;
}

#title-container {
  align-items: left;
  margin-bottom: 38px;
}
#input-container {
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
  margin-top: 32px;
  margin-bottom: 32px;
  background-color: #1f2b5f;
  color: white;
  font-size: 26px;
  padding: 16px 64px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.25);
}
.button-login:active {
  background-color: #1f2b5f;
}
#social-media-container {
  margin-top: 32px;
}

.li{
  margin-bottom: 7px;
  margin-top: 7px;
}

.li-event{
  padding:20px;
  margin-bottom: 16px;
  padding-left: 130px;
}
</style>
