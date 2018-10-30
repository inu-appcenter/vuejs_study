import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Contact from '../pages/Contact.vue'
import About from '../pages/About.vue'
import Error from '../pages/Error.vue'

import AboutVue from '../pages/about/AboutVue.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  // mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '*',
      // redirect: '/',
      component: Error,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      children: [
        {
          path: 'about-vue',
          component: AboutVue,
        }
      ],
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})
