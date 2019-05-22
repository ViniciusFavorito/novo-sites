<template>
  <div id="container" class="flex-column">
    <div class="flex-column login-form">
      <div id="title-container" class="flex-column">
        <div id="title">Seja bem-vindo!</div>
        <div class="sub-title">Por favor identifique-se</div>
      </div>
      <div id="input-container" class="flex-column">
        <label>
          <input type="text" class="input" placeholder="Email">
        </label>
        <label>
          <input type="password" class="input" placeholder="Senha">
        </label>
      </div>
      <div class="button-login">
        Entrar
      </div>
      <div id="social-media-container">
        <div class="sub-title">Cadastre-se ou faça login com suas redes sociais</div>
        <SocialMedia
          :facebook-on-click="facebookLogin"
          :google-on-click="googleLogin"
          :github-on-click="githubLogin"/>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
import SocialMedia from './../components/SocialMedia'

export default {
  beforeRouteEnter (to, from, next) {
    store.dispatch('changeUseTemplate', false)
    next()
  },
  components: {
    SocialMedia
  },
  methods: {
    facebookLogin () {
      console.log('facebook')
    },
    githubLogin () {
      console.log('github')
    },
    googleLogin () {
      console.log('google')
    }
  }
}
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
  justify-content: center;
  align-items: center;
  background-color: #4442A2;
  width: 100vw;
  height: 100vh;
}

.login-form {
  align-items: center;
  background-color: white;
  padding: 64px;
  border-radius: 10px;
}

#title {
  font-size: 32px;
  margin-bottom: 16px;
}

.sub-title {
  color: #989898;
}

#title-container {
  align-items: center;
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
  background-color: #4442A1;
  color: white;
  font-size: 32px;
  padding: 16px 64px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.25);
}
.button-login:active {
  background-color: #4442b4;
}
#social-media-container {
  margin-top: 32px;
}
</style>
