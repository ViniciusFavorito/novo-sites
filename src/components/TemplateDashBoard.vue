<template>
  <div id="dashboard">
    <div class="menu">
      <div class="title">
        <span>
          Seja Bem Vindo ao Dashboard!
        </span>
      </div>
      <div class="options">
        <ul>
          <li
            v-for="(menu, index) in dashBoardMenus" :key="index"
            @click="onSelectMenu(index)"
            :class="menuActive === index ? 'menu-item menu-active' : 'menu-item'">
            <v-icon class="item-icon" :name="menu.icon" scale="1.5"></v-icon>
            <span class="item-name">
              {{ menu.name }}
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'templateDashboard',
  computed: {
    ...mapState([ 'dashBoardMenus' ])
  },
  data () {
    return {
      menuActive: 0
    }
  },
  methods: {
    onSelectMenu (index) {
      this.menuActive = index
      this.$router.push(`/dashboard/${this.dashBoardMenus[index].route}`)
    }
  }
}
</script>

<style scoped>
  #dashboard {
    font-family: Arial, sans-serif;
    color: white;
    display: flex;
    flex: 1;
    background-color: #1F2B50;
  }

  #dashboard > .menu {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  #dashboard > .menu > .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    font-size: 17px;
    font-weight: 500;
  }

  #dashboard > .menu > .options {
    flex: 5;
  }

  .options > ul {
    list-style: none;
    padding: 0;
  }

  .menu-item {
    list-style: none;
    padding: 16px;
    font-weight: 600;
    color: gray;
    cursor: pointer;
    display: flex;
    align-items: flex-end;
  }

  .item-name {
    padding-left: 12px;
  }

  .menu-active {
    color: white;
    background-color: rgba(31, 43, 90, 0.6);
  }

  #dashboard > .content {
    flex: 4;
    border-top-left-radius: 30px;
    background-color: white;
    padding: 15px;
    color: black;
  }
</style>
