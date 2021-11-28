import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TeamPage from '../views/TeamPage.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/teamPage/:teamId',
    name: 'TeamPage',
    component: TeamPage, // () => import(/* webpackChunkName: "teamPage" */ '../views/TeamPage.vue'),
    beforeEnter: (to, from, next) => {
      const userId = localStorage.getItem('uuid')
      if (userId != 'null') {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/dashboard/:uuid',
    name: 'Dashboard',
    component: Dashboard, // () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
