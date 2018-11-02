// ie와 자바스크립트 promise(axios에서 사용)에 대한 폴리필
import 'babel-polyfill'
import 'es6-promise/auto'
import 'event-source-polyfill'
import 'promise-polyfill/src/polyfill'

// 전역설정, 임포트
import Vue from 'vue'
import App from './App.vue'
import router from './routes'

import axios from 'axios'
// 위에서 axios 를 불러왔고, 아래 코드로 사용설정 합니다
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
