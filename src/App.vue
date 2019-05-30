<template>
  <div id="app">
    <notifications group="app" position="top center"></notifications>
    <TemplateDefault v-if="useTemplate === 'default'">
      <router-view></router-view>
    </TemplateDefault>
    <TemplateDashboard v-if="useTemplate === 'dashboard'">
      <router-view></router-view>
    </TemplateDashboard>
    <div v-if="useTemplate === 'none'">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([ 'useTemplate' ])
  },
  name: 'TextFields',
    data: () => ({
      textarea: null,
    })
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
