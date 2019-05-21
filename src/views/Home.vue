<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" nome="sid"/>
    <HelloWorld msg="Welcome to Your Vue.js App" nome="sid"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from './../components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
