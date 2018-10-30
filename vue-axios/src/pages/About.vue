<template>
  <div id="about">
    <p>About page</p>
    <a @click="$router.go(-1)">Go Back</a>
    <router-link
      to="/about/about-vue"
    >about-vue</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'about',
}
</script>

<style>

</style>
