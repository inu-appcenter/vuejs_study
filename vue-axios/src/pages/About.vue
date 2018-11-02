<template>
  <div id="about">
    <p>About page</p>
    <!-- 프로그래밍적 라우팅 -->
    <a @click="$router.go(-1)">Go Back</a>

    <!-- 라우터 링크와 라우터 뷰(자식 라우터) -->
    <router-link to="/about/about-vue">about-vue</router-link>
    <router-view></router-view>
    <!-- /about/about-vue의 내용이 위 라우터 뷰에 보여지게 됩니다 -->
  </div>
</template>

<script>
export default {
  name: 'about',
}
</script>

<style>

</style>
