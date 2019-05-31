<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import store from '../store'

export default {
  beforeRouteEnter (to, from, next) {
    let userAuthenticated = store.getters['user/userAuthenticated']
    store.dispatch('changeUseTemplate', 'dashboard')
    if (userAuthenticated) {
      next()
    } else {
      next('/login')
    }
  },
  beforeRouteLeave (to, from, next) {
    store.dispatch('changeUseTemplate', 'default')
    next()
  }
}
</script>
