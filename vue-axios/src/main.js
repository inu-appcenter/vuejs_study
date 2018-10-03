import 'babel-polyfill'
import 'es6-promise/auto'
import 'event-source-polyfill'
import 'promise-polyfill/src/polyfill'

import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

Vue.prototype.$http = axios

new Vue({
  el: '#app',
  render: h => h(App)
})
