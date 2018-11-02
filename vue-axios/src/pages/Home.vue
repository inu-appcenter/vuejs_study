<template>
  <div id="home">
    <p>Home page</p>
    <router-view class="router-view"></router-view>
    <FetchUsers></FetchUsers>
    <!-- FetchUsers 라는 컴포넌트를 사용 -->
  </div>
</template>

<script>
// FetchUsers 라는 컴포넌트를 불러옴
import FetchUsers from '../components/FetchUsers'

export default {
  name: 'home',

  components: {
    // FetchUsers라는 컴포넌트를 사용하겠다고 정의, 익스포트
    FetchUsers,
  },
}
</script>

<style>

</style>
