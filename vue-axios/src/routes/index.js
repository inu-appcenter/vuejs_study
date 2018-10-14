import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})
