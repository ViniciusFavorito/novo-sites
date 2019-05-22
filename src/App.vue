<template>
  <div id="app">
    <TemplateComponent v-if="useTemplate">
      <router-view></router-view>
    </TemplateComponent>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([ 'useTemplate' ])
  }
}
</script>

<style>
  body, #app {
    width: 100vw;
    height: 100vh;
    display: flex;
    margin: 0;
    padding: 0;
  }
</style>
