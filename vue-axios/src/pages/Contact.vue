<template>
  <div id="contact">
    <p>Contact page</p>
    <button @click="start">Start Confetti</button>
    <button @click="stop">Stop Confetti</button>
    <!-- 버튼에 할당된 온클릭 이벤트는 아래 메소드에 정의되어 있습니다 -->
    <br>
    <a @click="$router.go(-1)">Go Back</a>
  </div>
</template>

<script>
import Vue from 'vue'
import VueConfetti from 'vue-confetti'

Vue.use(VueConfetti)

export default {
  name: 'contact',
  methods: {
    start () {
      this.$confetti.start({
        shape: 'circle',
        colors: [
          'red',
          'pink',
          '#ba0000',
        ],
      })
    },
    stop () {
      this.$confetti.stop()
    },
  },
}
</script>

<style>

</style>
