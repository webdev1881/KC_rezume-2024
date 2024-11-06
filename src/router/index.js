import Vue from 'vue'
import VueRouter from 'vue-router'
import Cv from '../views/Cv.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Cv,
  },
  {
    path: '/ru',
    name: 'ru',
    component: Cv,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
