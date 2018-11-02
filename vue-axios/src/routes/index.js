import Vue from 'vue'
// 뷰의 기본 라우터
import VueRouter from 'vue-router'

// 컴포넌트를 임포트
import Home from '../pages/Home.vue'
import Contact from '../pages/Contact.vue'
import About from '../pages/About.vue'
import Error from '../pages/Error.vue'

import AboutVue from '../pages/about/AboutVue.vue'

Vue.use(VueRouter)

export default new VueRouter({
  // 뷰의 라우터 모드에는 히스토리 모드와 해쉬뱅 모드가 있습니다
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
      // 특정 path에 위치할 때 리다이렉트를 해줄 수 있습니다
      // redirect: '/',
      component: Error,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      // 부모 컴포넌트의 자식으로써 라우터를 사용하는 경우
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
  // url 이동시 문서 위치를 좌상단으로 설정 (뷰 라우터는 url을 이동할 때 위치가 최신화되지 않습니다)
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})
