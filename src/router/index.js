import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import drags from '../views/drags.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },{
    path:'/drags',
    name:'drags',
    component:drags
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
