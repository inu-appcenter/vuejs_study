<template>
  <div id="navigation">
    <router-link
      v-for="(value, key) in menuList"
      v-bind:key="key"
      v-bind:to="value"
      :class="key.toLowerCase()"
    >{{ key }}</router-link>
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
