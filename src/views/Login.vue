<template>
  <div id="container">
    Login
  </div>
</template>

<script>
import store from '../store'

export default {
  beforeRouteEnter (to, from, next) {
    store.dispatch('changeUseTemplate', false)
    next()
  }
}
</script>

<style scoped>
#container {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: azure;
  flex-direction: column;
}
</style>
