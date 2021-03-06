import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import Events from './views/Events.vue'
import Contact from './views/Contact.vue'
import DashBoard from './views/DashBoard.vue'
import DashBoardEvents from './views/DashBoardEvents.vue'
import DashBoardCreateEvents from './views/DashBoardCreateEvents.vue'
import DashBoardListEvents from './views/DashBoardListEvents.vue'
import DashBoardHome from './views/DashBoardHome.vue'
import DashBoardEditEvents from './views/DashBoardEditEvents.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard,
      children: [
        {
          path: 'home',
          name: 'dashboard-home',
          component: DashBoardHome
        },
        {
          path: 'events',
          name: 'dashboard-home',
          component: DashBoardEvents,
          children: [
            {
              path: '/',
              name: 'dashboard-events-list',
              component: DashBoardListEvents
            },
            {
              path: 'create',
              name: 'dashboard-events-create',
              component: DashBoardCreateEvents
            },
            {
              path: 'edit/:id',
              name: 'dashboard-events-edit',
              component: DashBoardEditEvents
            }
          ]
        }
      ]
    }
  ]
})
