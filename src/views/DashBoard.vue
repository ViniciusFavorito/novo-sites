<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import store from '../store'

export default {
  beforeRouteEnter (to, from, next) {
    store.dispatch('changeUseTemplate', 'dashboard')
    next()
  },
  beforeRouteLeave (to, from, next) {
    store.dispatch('changeUseTemplate', 'default')
    next()
  }
}
</script>
