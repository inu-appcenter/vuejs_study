<template>
  <div id="navigation">
    <router-link
      v-for="(value, key) in menuList"
      v-bind:key="key"
      v-bind:to="value"
      :class="key.toLowerCase()"
    >{{ key }}</router-link>
    <!-- v-for 로 menuList 의 길이만큼 반복
    :to 로 라우터링크의 href 설정
    :class 에 key 값을 바인딩 -->
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      menuList: {
        Home: '/',
        About: '/about',
        Contact: '/contact',
      },
    }
  },
}
</script>

<style>
#navigation {
  border: 1px solid black;
}

a {
  display: inline-block;
  margin: 0 1rem;
}
</style>
