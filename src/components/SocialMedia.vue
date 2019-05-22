<template>
  <div class="container">
    <div
      v-for="(socialMedia, index) in socialMedias"
      :key="index"
      :class="index === 1 ? 'circle middle-item' : 'circle'"
      @click="socialMedia.onClickFunction">
      <img :alt="socialMedia.name" :src="socialMedia.icon" :class="socialMedia.class">
    </div>
  </div>
</template>

<script>
import facebookIcon from './../assets/icons/facebook-f-brands.svg'
import googleIcon from './../assets/icons/google-plus-g-brands.svg'
import githubIcon from './../assets/icons/github-brands.svg'

export default {
  name: 'SocialMedia',
  data () {
    return {
      socialMedias: [
        { icon: facebookIcon, name: 'facebook', class: 'facebook-icon', onClickFunction: this.facebookOnClick },
        { icon: googleIcon, name: 'google', class: 'google-icon', onClickFunction: this.googleOnClick },
        { icon: githubIcon, name: 'github', class: 'github-icon', onClickFunction: this.githubOnClick }
      ]
    }
  },
  props: ['facebookOnClick', 'googleOnClick', 'githubOnClick']
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}
.circle {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  background-color: white;
  border: 2px solid #E9E9E9;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}
.facebook-icon {
  width: 20px;
}
.google-icon {
  width: 40px;
}
.github-icon {
  width: 40px;
}
.middle-item {
  margin: 0 32px;
}
</style>
